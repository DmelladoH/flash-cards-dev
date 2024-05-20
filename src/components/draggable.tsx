import { useDrag } from "~/hooks/useDrag";

function Draggable({
  children,
  action,
}: {
  children: React.ReactNode;
  action: () => void;
}) {
  const { dragEvent } = useDrag();

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
