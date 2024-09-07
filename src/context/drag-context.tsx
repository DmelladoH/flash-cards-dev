"use client";

import { createContext, useState } from "react";
import { Point } from "~/types";

interface DragProps {
  isDragging: boolean;
  isAnimating: boolean;
  mouseDownPosition: Point;

  setIsDragging: (val: boolean) => void;
  setIsAnimating: (val: boolean) => void;
  setMouseDownPosition: (val: Point) => void;
}

export const DragContext = createContext<DragProps>({
  isDragging: false,
  isAnimating: false,
  mouseDownPosition: { x: 0, y: 0 },

  setIsDragging: () => {},
  setIsAnimating: () => {},
  setMouseDownPosition: () => {},
});

export function DragProvider({ children }: { children: React.ReactNode }) {
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const [mouseDownPosition, setMouseDownPosition] = useState<Point>({
    x: 0,
    y: 0,
  });

  return (
    <DragContext.Provider
      value={{
        isDragging,
        isAnimating,
        mouseDownPosition,
        setIsDragging,
        setIsAnimating,
        setMouseDownPosition,
      }}
    >
      {children}
    </DragContext.Provider>
  );
}
