import { CARD_DECISION_THRESHOLD } from "@/constants";
import { useState } from "react";
import { nextCardByAction } from "~/helpers/dragHelper";

function Draggable({
  children,
  action,
}: {
  children: React.ReactNode;
  action: () => void;
}) {
  const [isMoving, setIsMoving] = useState(false);
  const [pullDeltaX, setPullDeltaX] = useState<number>(0);
  const [startX, setStartX] = useState<number>(0);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = document.getElementById("flashcard");

    if (!card || !card.closest("div")?.classList.contains("draggable")) {
      return;
    }

    setStartX(e.pageX);
    setIsMoving(true);
  };

  const onMouseMoving = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMoving) return;

    const card = document.getElementById("flashcard");
    const backgroundCard = document
      .getElementById("backgroundCard")
      ?.closest("div");

    const currentPosition = e.pageX;
    if (currentPosition == null || startX == null) return;

    const actualDeltaX = currentPosition - startX;
    setPullDeltaX(actualDeltaX);

    if (actualDeltaX === 0) return;

    const deg = actualDeltaX / 10;
    if (!card) return;

    card.style.transform = `translateX(${actualDeltaX}px) rotate(${deg}deg)`;

    if (backgroundCard) {
      backgroundCard.style.transition = "transform 0.3s";
      deg >= 4 || deg <= -4
        ? (backgroundCard.style.transform = `rotate(0deg)`)
        : (backgroundCard.style.transform = `rotate(${deg}deg)`);
    }
  };

  const onMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("up");
    const card = document.getElementById("flashcard");
    const backgroundCard = document
      .getElementById("backgroundCard")
      ?.closest("div");

    if (!card) return;

    const isCardDecision = Math.abs(pullDeltaX) > CARD_DECISION_THRESHOLD;

    if (isCardDecision) {
      nextCardByAction(action);

      // const screenWidth = window.innerWidth;

      // console.log("decision");
      // console.log({ cardInnerText: card.innerText });

      // console.log({ pullDeltaX });
      // card.style.transition = "transform 0.8s ease-out";
      // card.style.transform = `translateX(${
      //   pullDeltaX > 0 ? screenWidth : -screenWidth
      // }px) rotate(${pullDeltaX > 0 ? 90 : -90}deg)`;

      // const onTransitionEnd = () => {
      //   const elemToRemove = card?.closest("div");
      //   if (elemToRemove) elemToRemove.remove();

      //   setPullDeltaX(0);
      //   setIsMoving(false);
      //   setStartX(0);
      //   action();
      // };

      // card.addEventListener(
      //   "transitionend",
      //   (event) => {
      //     if (event.propertyName === "transform") {
      //       onTransitionEnd();
      //     }
      //   },
      //   { once: true },
      // );
    } else {
      card.style.transition = "transform 0.5s";
      card.style.transform = "translateX(0) rotate(0deg)";

      if (backgroundCard) {
        backgroundCard.style.transition = "transform 0.5s";
        backgroundCard.style.transform = `rotate(-4deg)`;
      }
      setIsMoving(false);
    }

    card.addEventListener(
      "transitionend",
      () => {
        setPullDeltaX(0);
      },
      { once: true },
    );
  };

  return (
    <div
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMoving}
      onMouseUp={onMouseUp}
      className="draggable absolute z-20 h-full w-full"
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}

export default Draggable;
