"use client";

import { useMemo } from "react";
import FlashCard from "./UI/card";
import { useDeckContext } from "~/hooks/useDeckContext";
import { EmptyState } from "./empty-state";

function Deck() {
  const { deck, isAnswerShown, setIsAnswerShown, isLoading, category } =
    useDeckContext();

  const peekCard = (position: number) => {
    return deck[position];
  };

  const flip = () => {
    setIsAnswerShown((prev) => !prev);
  };

  const currentCard = useMemo(() => deck[0], [isLoading]);
  const secondCard = useMemo(() => peekCard(1), [isLoading]);
  const thirdCard = useMemo(() => peekCard(2), [isLoading]);

  if (!deck.length) {
    return <EmptyState category={category} />;
  }

  return (
    <div className="relative grid h-full justify-items-center md:mt-20">
      {thirdCard && (
        <div className="absolute aspect-video h-full w-[42vh] -rotate-3 md:h-[50vh] md:w-[60vh] md:-rotate-6">
          <FlashCard key={thirdCard.id} id="secondBackgroundCard" />
        </div>
      )}
      {secondCard && (
        <div className="absolute aspect-video h-full w-[42vh] -rotate-3 md:h-[50vh] md:w-[60vh] md:-rotate-6">
          <FlashCard
            key={secondCard.id}
            id="backgroundCard"
            question={secondCard.question}
          />
        </div>
      )}
      {currentCard && (
        <div className="absolute  z-20 aspect-video h-full w-[42vh] md:h-[50vh] md:w-[60vh]">
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
