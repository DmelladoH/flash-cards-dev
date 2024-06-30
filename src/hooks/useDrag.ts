import { useEffect, useState } from "react";
import { startDrag } from "~/helpers/dragHelper";

export function useDrag() {
  const [draggableCard, setDraggableCard] = useState<HTMLElement>();
  const [backgroundCard, setBackgroundCard] = useState<HTMLElement>();

  const [isDragging, setIsDragging] = useState(false);
  const [mouseDownPosition, setMouseDownPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  let isAnimating = false;

  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMouseDownPosition({ x: event.clientX, y: event.clientY });
    setIsDragging(false);
  };

  const handleMouseUp = (
    event: React.MouseEvent<HTMLButtonElement>,
    action: () => void,
  ) => {
    if (isDragging) return;
    action();
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const distanceMoved = Math.sqrt(
      Math.pow(event.clientX - mouseDownPosition.x, 2) +
        Math.pow(event.clientY - mouseDownPosition.y, 2),
    );

    if (distanceMoved > 5) {
      // Adjust this threshold as needed
      setIsDragging(true);
    }
  };

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

  return {
    handleNextCard,
    dragEvent,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
  };
}
