import { useDeck } from "~/hooks/useDeck";
import FlashCard from "./UI/card";
import Draggable from "./draggable";

interface Props {
  category: string;
  currentCardId: string;
  flip: () => void;
  showAnswer: boolean;
  nextAction: () => void;
}

function Deck({
  category,
  currentCardId,
  showAnswer,
  flip,
  nextAction,
}: Props) {
  const { currentCard, nextCard, peekCard } = useDeck({
    category,
    currentCardId,
  });
  return (
    <>
      {peekCard(3) && (
        <div className="transform-bg-card absolute aspect-video h-[62vh] w-[42vh] md:h-[50vh] md:w-[60vh]">
          <FlashCard id="secondBackgroundCard" />
        </div>
      )}
      {nextCard && (
        <div className="transform-bg-card absolute aspect-video h-[62vh] w-[42vh] md:h-[50vh] md:w-[60vh]">
          <FlashCard id="backgroundCard" question={nextCard.question} />
        </div>
      )}
      {currentCard && (
        <div className="z-50 aspect-video h-[62vh] w-[42vh] md:h-[50vh] md:w-[60vh]">
          <Draggable action={nextAction}>
            <FlashCard
              id="flashcard"
              question={currentCard.question}
              answer={currentCard.answer}
              showAnswer={showAnswer}
              handleFlip={flip}
            />
          </Draggable>
        </div>
      )}
    </>
  );
}

export default Deck;
