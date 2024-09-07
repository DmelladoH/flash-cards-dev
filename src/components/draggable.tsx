import { CARD_DECISION_THRESHOLD } from "@/constants";
import { useEffect, useState } from "react";
import { startDrag } from "~/helpers/dragHelper";
import { useDrag } from "~/hooks/useDrag";

function Draggable({
  children,
  action,
}: {
  children: React.ReactNode;
  action: () => void;
}) {
  // const { isAnimating, setIsAnimating } = useDrag();
  const [isMoving, setIsMoving] = useState(false);
  const [pullDeltaX, setPullDeltaX] = useState<number>(0);
  const [card, setCard] = useState<HTMLElement>();
  const [backgroundCard, setBackgroundCard] = useState<HTMLElement>();
  const [startX, setStartX] = useState();

  // useEffect(() => {
  //   console.log({
  //     isMoving,
  //     pullDeltaX,
  //     card,
  //     backgroundCard,
  //     startX,
  //   });
  // }, [isMoving, pullDeltaX, card, backgroundCard, startX]);

  // const dragEvent = (e: MouseEvent | TouchEvent, action: () => void) => {
  //   startDrag({
  //     isAnimating,
  //     setIsAnimating,
  //     e,
  //     action,
  //   });
  // };

  // document.addEventListener("mousedown", (e) => dragEvent(e, action));
  // document.addEventListener("touchstart", (e) => dragEvent(e, action), {
  //   passive: true,
  // });

  return (
    <div
      onMouseDown={(e: any) => {
        console.log("start");

        const card = document.getElementById("flashcard");

        if (!card || !card.closest("div")?.classList.contains("draggable")) {
          return;
        }

        setCard(card);

        const backgroundCard = document
          .getElementById("backgroundCard")
          ?.closest("div");

        if (backgroundCard) {
          setBackgroundCard(backgroundCard);
        }
        setStartX(e.pageX);

        setIsMoving(true);
      }}
      onMouseMove={(e: any) => {
        if (!isMoving) return;
        console.log("moving");

        const currentPosition = e.pageX;
        if (currentPosition == null || startX == null) return;

        const actualDeltaX = currentPosition - startX;
        setPullDeltaX(actualDeltaX);

        if (actualDeltaX === 0) return;

        const deg = actualDeltaX / 10;
        if (!card) return;

        card.style.transform = `translateX(${pullDeltaX}px) rotate(${deg}deg)`;

        if (backgroundCard) {
          backgroundCard.style.transition = "transform 0.9s";
          deg >= 4 || deg <= -4
            ? (backgroundCard.style.transform = `rotate(0deg)`)
            : (backgroundCard.style.transform = `rotate(${deg}deg)`);
        }
      }}
      onMouseUp={(e: any) => {
        if (!card) return;
        console.log("finish");

        const isCardDecision = Math.abs(pullDeltaX) > CARD_DECISION_THRESHOLD;

        if (isCardDecision) {
          card.style.transition = "transform 0.5s";
          card.style.transform = `translateX(${
            pullDeltaX > 0 ? 1000 : -1000
          }px) rotate(${pullDeltaX > 0 ? 90 : -90}deg)`;

          console.log("decision");
          card.addEventListener(
            "transitionend",
            () => {
              setPullDeltaX(0);
              const elemToRemove = card?.closest("div");
              if (elemToRemove) elemToRemove.remove();
              action();
              setIsMoving(false);
            },
            { once: true },
          );
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
      }}
      className="draggable absolute z-20 h-full w-full"
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}

export default Draggable;
