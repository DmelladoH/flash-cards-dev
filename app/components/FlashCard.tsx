"use client";
import { useState } from "react";

interface FlashCardProps {
  question: string;
  answer: string;
}

function FlashCard({ question, answer }: FlashCardProps) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <article className="h-[253px] w-[404px] bg-white rounded-xl text-black flex items-center justify-center">
      <button className="h-full w-full" onClick={handleClick}>
        {show ? (
          <h3>{question}</h3>
        ) : (
          <div>
            <p>{answer}</p>
          </div>
        )}
      </button>
    </article>
  );
}

export default FlashCard;
