import Link from "next/link";

interface FlashCardProps {
  question: string;
  answer: string;
  hasExtendedContent?: boolean;
  showAnswer?: boolean;
  handleFlip?: () => void;
}

function FlashCard({
  question,
  answer,
  showAnswer = false,
  handleFlip,
}: FlashCardProps) {
  return (
    <article className="absolute grid h-full w-full cursor-grab items-center justify-center rounded-xl border-2 bg-white object-center p-10 text-black">
      {/* <button
        className={`h-full w-full transition-all card duration-500 group-focus:[transform:rotateY(180deg)] ${showAnswer} ? transform:rotateY(180deg) : ''`}
        onClick={handleFlip}
      > */}
      {!showAnswer ? (
        <div>
          <h3 className="text-xl">{question}</h3>
        </div>
      ) : (
        <div>
          <section
            dangerouslySetInnerHTML={{ __html: answer }}
            className="translate-x-0 transform text-pretty"
            style={{ transform: "translateX(0) rotateX(180deg)" }}
          ></section>
        </div>
      )}
      {/* </button> */}
      {/* {showAnswer && hasExtendedContent && (
        <footer className="text text-end ">
          <Link href={`/JavaScript/${id}/details`}>Learn more</Link>
        </footer>
      )} */}
    </article>
  );
}

export default FlashCard;
