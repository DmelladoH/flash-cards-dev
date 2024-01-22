"use client";
import Link from "next/link";
import { useState } from "react";

interface FlashCardProps {
  id: string;
  question: string;
  answer: string;
  hasExtendedContent: boolean;
}

function FlashCard({ id, question, answer, hasExtendedContent }: FlashCardProps) {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <article className="h-[453px] w-[604px] p-10 bg-white rounded-xl text-black grid items-center justify-center">
      <button className="h-full w-full" onClick={handleClick}>
        {!showAnswer ? (
          <div>
            <h3>{question}</h3>
          </div>
        ) : (
          <div>
            <section dangerouslySetInnerHTML={{ __html: answer }} className="text-pretty"></section> 
          </div>
        )}
      </button>
      {
        showAnswer && hasExtendedContent && (
          <footer className="text text-end ">
              <Link href={`/${id}`}>
                Learn more
              </Link>
          </footer>)
      }
    </article>
  );
}

export default FlashCard;
