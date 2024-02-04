"use client";
import Link from "next/link";
import { useState } from "react";

interface FlashCardProps {
  id: string;
  question: string;
  answer: string;
  hasExtendedContent: boolean;
}

function FlashCard({
  id,
  question,
  answer,
  hasExtendedContent,
}: FlashCardProps) {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <article className="absolute border-2 h-full w-full p-10 bg-white rounded-xl text-black grid items-center justify-center object-center">
      <button
        className={`h-full w-full transition-all card duration-500 group-focus:[transform:rotateY(180deg)] ${showAnswer} ? transform:rotateY(180deg) : ''`}
        onClick={handleClick}
      >
        {!showAnswer ? (
          <div>
            <h3>{question}</h3>
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
