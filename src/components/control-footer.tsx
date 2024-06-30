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
      <div className="mt-10 flex justify-center gap-9 text-white">
        <button
          className="transition duration-300 ease-in-out hover:scale-110"
          onClick={handleNextCard}
          onMouseEnter={() => setHover("next")}
          onMouseLeave={() => setHover("")}
        >
          <div className="block rounded-full bg-white p-4">
            <NextSvg />
          </div>
        </button>
        <button
          className="transition duration-300 ease-in-out hover:scale-110"
          onClick={handleFlip}
          onMouseEnter={() => setHover("flip")}
          onMouseLeave={() => setHover("")}
        >
          <div className="block rounded-full bg-white p-4">
            <FlipSvg />
          </div>
        </button>
      </div>

      <div className="h-8">
        {hover && (
          <p className="text-center text-2xl font-bold uppercase opacity-75">
            {hover}
          </p>
        )}
      </div>
    </footer>
  );
}
