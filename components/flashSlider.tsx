"use client";

import { Card } from "@/app/types";
import { useState } from "react";
import FlashCard from "./UI/flashCard";
import useFlashCards from "@/app/hooks/useFlashCards";

interface Props {}

function FlashCardSlider({}: Props) {
  const { currentCard, deck, nextCard, pickNextCard } = useFlashCards({
    category: "JavaScript",
  });

  console.log(deck);

  const handleNext = () => {
    nextCard();
  };

  return (
    <>
      <div className="relative h-[50vh] w-[60vh] aspect-video">
        {currentCard && (
          <div className="z-99">
            <FlashCard
              id={currentCard.id}
              key={currentCard.id}
              question={currentCard.question}
              answer={currentCard["sort-answer"]}
              hasExtendedContent={currentCard["extended-content"] != null}
            />
          </div>
        )}
        {pickNextCard() && (
          <div className="h-full w-full transform1">
            <FlashCard
              id={pickNextCard().id}
              key={pickNextCard().id}
              question={pickNextCard().question}
              answer={pickNextCard()["sort-answer"]}
              hasExtendedContent={pickNextCard()["extended-content"] != null}
            />
          </div>
        )}
      </div>

      <footer className="text-white ">
        <button onClick={handleNext}>Next</button>
      </footer>
    </>
  );
}

export default FlashCardSlider;
