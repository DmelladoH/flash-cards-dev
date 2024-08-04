"use client";
import { useState } from "react";
import { NextSvg } from "./svgs/nextSvg";
import RoundedButton from "./UI/rounded-button";
import { CloseEyeSvg } from "./svgs/closeEyeSvg";
import { OpenEyeSvg } from "./svgs/openEyeSvg";

interface ControlFooterProps {
  handleNextCard: () => void;
  handleFlip: () => void;
  isFlipped: boolean;
}

export function ControlFooter({
  handleNextCard,
  handleFlip,
  isFlipped,
}: ControlFooterProps) {
  const [hover, setHover] = useState<string>("");

  return (
    <footer className="grid gap-10 ">
      <div className="mt-10 flex justify-center gap-16 text-white">
        <RoundedButton
          onClick={handleFlip}
          onMouseEnter={() => setHover("flip")}
          onMouseLeave={() => setHover("")}
        >
          {isFlipped ? <CloseEyeSvg /> : <OpenEyeSvg />}
        </RoundedButton>
        <RoundedButton
          onClick={handleNextCard}
          onMouseEnter={() => setHover("next")}
          onMouseLeave={() => setHover("")}
        >
          <NextSvg />
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
