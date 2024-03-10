"use client";
import { useState } from "react";
import { FlipSvg } from "./svgs/flipSvg";
import { NextSvg } from "./svgs/nextSvg";

interface ControlFooterProps {
  handleNextCard: () => void;
  handleFlip: () => void;
}

export function ControlFooter({
  handleNextCard,
  handleFlip,
}: ControlFooterProps) {
  const [hover, setHover] = useState<string>("");

  return (
    <footer className="grid gap-10 ">
      <div className="text-white mt-10 flex gap-9 justify-center">
        <button
          className="transition hover:scale-110 duration-300 ease-in-out"
          onClick={handleNextCard}
          onMouseEnter={() => setHover("next")}
          onMouseLeave={() => setHover("")}
        >
          <div className="bg-white rounded-full block p-4">
            <NextSvg />
          </div>
        </button>
        <button
          className="transition hover:scale-110 duration-300 ease-in-out"
          onClick={handleFlip}
          onMouseEnter={() => setHover("flip")}
          onMouseLeave={() => setHover("")}
        >
          <div className="bg-white rounded-full block p-4">
            <FlipSvg />
          </div>
        </button>
      </div>

      {hover && (
        <div>
          <p className="uppercase opacity-75 font-bold text-center text-2xl">
            {hover}
          </p>
        </div>
      )}
    </footer>
  );
}
