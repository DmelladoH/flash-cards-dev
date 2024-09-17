"use client";

import { useMemo } from "react";
import FlashCard from "./UI/card";
import { useDeckContext } from "~/hooks/useDeckContext";

function Deck() {
  const { deck, isAnswerShown, setIsAnswerShown, isLoading } = useDeckContext();

  const peekCard = (position: number) => {
    return deck[position];
  };

  const flip = () => {
    setIsAnswerShown((prev) => !prev);
  };

  const currentCard = useMemo(() => deck[0], [isLoading]);
  const secondCard = useMemo(() => peekCard(1), [isLoading]);
  const thirdCard = useMemo(() => peekCard(2), [isLoading]);

  return (
    <div className="grid justify-items-center md:mt-20">
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
