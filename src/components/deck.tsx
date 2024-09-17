"use client";

import { useMemo } from "react";
import FlashCard from "./UI/card";
import { useDeckContext } from "~/hooks/useDeckContext";

function Deck() {
  const { deck, isAnswerShown, setIsAnswerShown, next } = useDeckContext();

  const peekCard = (position: number) => {
    return deck[position];
  };

  const flip = () => {
    setIsAnswerShown((prev) => !prev);
  };

  const currentCard = useMemo(() => deck[0], []);
  const secondCard = useMemo(() => peekCard(1), []);
  const thirdCard = useMemo(() => peekCard(2), []);

  console.log({ currentCard, secondCard, thirdCard });
  return (
    <div className="mt-20 grid justify-items-center">
      {thirdCard && (
        <div className="transform-bg-card absolute aspect-video h-[62vh] w-[42vh] md:h-[50vh] md:w-[60vh]">
          <FlashCard key={thirdCard.id} id="secondBackgroundCard" />
        </div>
      )}
      {secondCard && (
        <div className="transform-bg-card absolute aspect-video h-[62vh] w-[42vh] md:h-[50vh] md:w-[60vh]">
          <FlashCard
            key={secondCard.id}
            id="backgroundCard"
            question={secondCard.question}
          />
        </div>
      )}
      {currentCard && (
        <div className="absolute z-20 aspect-video h-[62vh] w-[42vh] md:h-[50vh] md:w-[60vh]">
          <FlashCard
            key={currentCard.id}
            id="flashcard"
            question={currentCard.question}
            answer={currentCard.answer}
            showAnswer={isAnswerShown}
            handleFlip={flip}
          />
        </div>
      )}
    </div>
  );
}

export default Deck;
