import { useEffect, useState } from "react";
import { startDrag } from "~/helpers/dragHelper";

export function useDrag() {
  const [draggableCard, setDraggableCard] = useState<HTMLElement>();
  const [backgroundCard, setBackgroundCard] = useState<HTMLElement>();
  let isAnimating = false;

  useEffect(() => {
    setDraggableCard(document.querySelector(".draggable") as HTMLElement);
    setBackgroundCard(
      document.getElementsByClassName("first").item(0) as HTMLElement,
    );
  }, []);

  const dragEvent = (e: MouseEvent | TouchEvent, next: () => void) => {
    startDrag({
      isAnimating,
      e,
      next,
    });
  };

  const handleNextCard = (action: () => void) => {
    if (!draggableCard) return;
    draggableCard.style.transition = "transform 1s";
    draggableCard.style.transform = `translateX(${2000}px) rotate(${90}deg)`;

    if (backgroundCard) {
      backgroundCard?.classList.add("detransform1");
    }

    draggableCard.addEventListener(
      "transitionend",
      () => {
        isAnimating = false;
        action();
      },
      { once: true },
    );
  };

  return { handleNextCard, dragEvent };
}
