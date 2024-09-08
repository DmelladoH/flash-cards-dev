"use client";
import { useEffect, useState } from "react";

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
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    // setMouseDownPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseUp = (
    event: React.MouseEvent<HTMLButtonElement>,
    action: () => void,
  ) => {
    if (isDragging) {
      setIsDragging(false);
      return;
    }
    action();
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const distanceMoved = Math.sqrt(
      Math.pow(event.clientX - event.pageX, 2) +
        Math.pow(event.clientY - event.pageY, 2),
    );
    setIsDragging(true);
  };

  const onClick = () => {
    handleFlip && handleFlip();
  };

  const onMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsButtonClicked(true);
    handleMouseDown(e);
  };

  const onMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsButtonClicked(false);
    handleMouseUp(e, onClick);
  };

  return (
    <article
      id={id}
      className="absolute	grid h-full w-full cursor-grab items-center justify-center rounded-xl border-2 bg-white object-center p-10 text-stone-900"
    >
      <button
        className={`card h-full w-full transition-all duration-500 group-focus:[transform:rotateY(180deg)] ${showAnswer} ? transform:rotateY(180deg) : ''`}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={(e: React.MouseEvent<HTMLButtonElement>) => {
          if (!isButtonClicked) return;
          handleMouseMove(e);
        }}
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
