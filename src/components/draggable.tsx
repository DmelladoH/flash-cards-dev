import { startDrag } from "~/helpers/dragHelper";
import { useDrag } from "~/hooks/useDrag";

function Draggable({
  children,
  action,
}: {
  children: React.ReactNode;
  action: () => void;
}) {
  const { isAnimating, setIsAnimating } = useDrag();

  const dragEvent = (e: MouseEvent | TouchEvent, next: () => void) => {
    startDrag({
      isAnimating,
      setIsAnimating,
      e,
      next,
    });
  };

  document.addEventListener("mousedown", (e) => dragEvent(e, action));
  document.addEventListener("touchstart", (e) => dragEvent(e, action), {
    passive: true,
  });

  return (
    <div
      className="draggable absolute z-20 h-full w-full"
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}

export default Draggable;
