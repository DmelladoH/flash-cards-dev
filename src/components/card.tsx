import { useDrag } from "~/hooks/useDrag";

interface FlashCardProps {
  question: string;
  answer: string;
  hasExtendedContent?: boolean;
  showAnswer?: boolean;
  handleFlip: () => void;
}

function FlashCard({
  question,
  answer,
  showAnswer = false,
  handleFlip,
}: FlashCardProps) {
  const { handleMouseDown, handleMouseUp, handleMouseMove } = useDrag();
  return (
    <article
      id="flashcard"
      className="absolute	grid h-full w-full cursor-grab items-center justify-center rounded-xl border-2 bg-white object-center p-10 text-black"
    >
      <button
        className={`card h-full w-full transition-all duration-500 group-focus:[transform:rotateY(180deg)] ${showAnswer} ? transform:rotateY(180deg) : ''`}
        onMouseDown={handleMouseDown}
        onMouseUp={(e) => handleMouseUp(e, handleFlip)}
        onMouseMove={handleMouseMove}
      >
        {!showAnswer ? (
          <div>
            <h3 className="text-xl">{question}</h3>
          </div>
        ) : (
          <div>
            <section
              dangerouslySetInnerHTML={{ __html: answer }}
              className="translate-x-0 transform text-pretty"
            ></section>
          </div>
        )}
      </button>
    </article>
  );
}

export default FlashCard;
