import { useState } from "react";
import { startDrag } from "~/helpers/dragHelper";

export function useDrag() {
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

  const dragEvent = (e: MouseEvent | TouchEvent, next: () => void) => {
    startDrag({
      isAnimating,
      e,
      next,
    });
  };

  return {
    dragEvent,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
  };
}
