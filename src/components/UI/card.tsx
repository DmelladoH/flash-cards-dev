import { useDrag } from "~/hooks/useDrag";

interface FlashCardProps {
  id: string;
  question?: string;
  answer?: string;
  hasExtendedContent?: boolean;
  showAnswer?: boolean;
  handleFlip?: () => void;
}

function FlashCard({
  id,
  question,
  answer,
  showAnswer = false,
  handleFlip,
}: FlashCardProps) {
  const { handleMouseDown, handleMouseUp, handleMouseMove } = useDrag();

  const onClick = () => {
    handleFlip && handleFlip();
  };

  return (
    <article
      id={id}
      className="absolute	grid h-full w-full cursor-grab items-center justify-center rounded-xl border-2 bg-white object-center p-10 text-stone-900"
    >
      <button
        className={`card h-full w-full transition-all duration-500 group-focus:[transform:rotateY(180deg)] ${showAnswer} ? transform:rotateY(180deg) : ''`}
        onMouseDown={handleMouseDown}
        onMouseUp={(e) => handleMouseUp(e, onClick)}
        onMouseMove={handleMouseMove}
      >
        {!showAnswer ? (
          <div>{question && <h3 className="text-xl">{question}</h3>}</div>
        ) : (
          <div>
            {answer && (
              <section
                dangerouslySetInnerHTML={{ __html: answer }}
                className="translate-x-0 transform text-pretty text-left"
              ></section>
            )}
          </div>
        )}
      </button>
    </article>
  );
}

export default FlashCard;
