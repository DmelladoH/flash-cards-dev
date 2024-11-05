"use client";
import { useState } from "react";
import { NextSvg } from "./svgs/nextSvg";
import RoundedButton from "./UI/rounded-button";
import CloseEyeSvg from "./svgs/closeEyeSvg";
import OpenEyeSvg from "./svgs/openEyeSvg";
import { useDeckContext } from "~/hooks/useDeckContext";
import { nextCardByAction } from "~/helpers/dragHelper";

export function ControlFooter() {
  const [hover, setHover] = useState<string>("");

  const { deck, isAnswerShown, next, setIsAnswerShown, isLoading } =
    useDeckContext();

  const flip = () => {
    setIsAnswerShown((prev) => !prev);
  };

  if (!deck.length) return null;

  return (
    <>
      {!isLoading ? (
        <footer className="grid gap-10 pb-10">
          <div className="mt-10 flex justify-center gap-16 text-white">
            <RoundedButton
              onClick={flip}
              aria-label="flip card"
              onMouseEnter={() => setHover("flip")}
              onMouseLeave={() => setHover("")}
            >
              {isAnswerShown ? <CloseEyeSvg /> : <OpenEyeSvg />}
            </RoundedButton>
            <RoundedButton
              onClick={(e) => nextCardByAction(next, window.innerWidth, 70)}
              aria-label="next card"
              onMouseEnter={() => setHover("next")}
              onMouseLeave={() => setHover("")}
            >
              <NextSvg />
            </RoundedButton>
          </div>
          <div className="hidden h-8 md:block">
            {hover && (
              <p className="text-center text-2xl font-bold uppercase opacity-75">
                {hover}
              </p>
            )}
          </div>
        </footer>
      ) : null}
    </>
  );
}
