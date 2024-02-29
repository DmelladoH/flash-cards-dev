import Link from "next/link";

interface FlashCardProps {
  id: string;
  question: string;
  answer: string;
  hasExtendedContent: boolean;
  showAnswer?: boolean;
  handleFlip?: () => void;
}

function FlashCard({
  id,
  question,
  answer,
  hasExtendedContent,
  showAnswer = false,
  handleFlip,
}: FlashCardProps) {
  return (
    <article className="absolute border-2 h-full w-full p-10 bg-white rounded-xl text-black grid items-center justify-center object-center cursor-grab">
      <button
        className={`h-full w-full transition-all card duration-500 group-focus:[transform:rotateY(180deg)] ${showAnswer} ? transform:rotateY(180deg) : ''`}
        onClick={handleFlip}
      >
        {!showAnswer ? (
          <div>
            <h3 className="text-xl">{question}</h3>
          </div>
        ) : (
          <div>
            <section
              dangerouslySetInnerHTML={{ __html: answer }}
              className="text-pretty"
            ></section>
          </div>
        )}
      </button>
      {showAnswer && hasExtendedContent && (
        <footer className="text text-end ">
          <Link href={`/JavaScript/${id}/details`}>Learn more</Link>
        </footer>
      )}
    </article>
  );
}

export default FlashCard;
