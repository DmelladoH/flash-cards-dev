import { useContext } from "react";
import { DragContext } from "~/context/drag-context";

export function useDrag() {
  const context = useContext(DragContext);

  if (context == null) {
    throw new Error("Error: useDrag must be use within dragContext");
  }

  return context;
}
