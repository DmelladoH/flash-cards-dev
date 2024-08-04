"use client";
import { useState } from "react";
import { FlipSvg } from "./svgs/flipSvg";
import { NextSvg } from "./svgs/nextSvg";
import RoundedButton from "./UI/rounded-button";

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
        <RoundedButton
          onClick={handleNextCard}
          onMouseEnter={() => setHover("next")}
          onMouseLeave={() => setHover("")}
        >
          <NextSvg />
        </RoundedButton>
        <RoundedButton
          onClick={handleFlip}
          onMouseEnter={() => setHover("flip")}
          onMouseLeave={() => setHover("")}
        >
          <FlipSvg />
        </RoundedButton>
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
