"use client";

import { useDeck } from "~/hooks/useDeck";
import FlashCard from "./UI/card";
import Draggable from "./draggable";
import { useDeckContext } from "~/hooks/useDeckContext";

interface Props {
  category: string;
  currentCardId: string;
}

function Deck({ category, currentCardId }: Props) {
  const { deck, isAnswerShown, setIsAnswerShown, next } = useDeckContext();

  const peekCard = (position: number) => {
    return deck[position];
  };

  const flip = () => {
    setIsAnswerShown((prev) => !prev);
  };

  const currentCard = deck[0];
  const secondCard = peekCard(1);
  const thirdCard = peekCard(2);

  return (
    <>
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
        <div className="z-50 aspect-video h-[62vh] w-[42vh] md:h-[50vh] md:w-[60vh]">
          <Draggable action={next}>
            <FlashCard
              key={currentCard.id}
              id="flashcard"
              question={currentCard.question}
              answer={currentCard.answer}
              showAnswer={isAnswerShown}
              handleFlip={flip}
            />
          </Draggable>
        </div>
      )}
    </>
  );
}

export default Deck;
