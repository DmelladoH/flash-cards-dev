"use client";

import { Card } from "@/app/types";
import { useState } from "react";
import FlashCard from "./UI/flashCard";

interface Props {
  deck: Card[];
}

function FlashCardSlider({ deck }: Props) {
  const [card, setCard] = useState(deck[0]);

  const handleNext = () => {
    setCard((prev) => {
      return deck[deck.indexOf(prev) + 1];
    });
  };

  if (card == undefined) {
    return <div>404</div>;
  }

  return (
    <>
      <FlashCard
        id={card.id}
        question={card.question}
        answer={card["sort-answer"]}
        hasExtendedContent={card["extended-content"] != null}
      />

      <footer className="text-white ">
        <button onClick={handleNext}>Next</button>
      </footer>
    </>
  );
}

export default FlashCardSlider;
