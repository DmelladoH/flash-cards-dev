"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import FlashCard from "~/components/card";
import Draggable from "~/components/draggable";
import { useDeck } from "~/hooks/useDeck";

function Page({ params }: { params: { category: string; id: string } }) {
  const router = useRouter();
  const { category, id } = params;
  const [showAnswer, setShowAnswer] = useState(false);

  const { currentCard, nextCard, setNextCard } = useDeck({
    category,
    currentCardId: id,
  });

  const next = () => {
    const card = document.getElementById("flashcard");

    if (!card) return;

    card.style.transition = "transform 1s";
    card.style.transform = `translateX(${2000}px) rotate(${90}deg)`;

    setTimeout(() => {
      setNextCard();
      if (nextCard == null) return;
      router.push(`/${category}/${nextCard?.name}`);
    }, 500);
  };

  const handleRest = () => {
    router.push(`/${category}`);
  };

  const handleFlip = () => {
    setShowAnswer((prev) => !prev);
  };
  if (currentCard == null)
    return (
      <div>
        <p>No hay mas cartas</p>
        <button onClick={handleRest}>reset</button>
      </div>
    );
  return (
    <div>
      {currentCard && (
        <>
          <div className="relative mt-6 aspect-video h-[60vh] w-[38vh] md:h-[50vh] md:w-[60vh]">
            <Draggable action={next}>
              <FlashCard
                question={currentCard.question}
                answer={currentCard.answer}
                showAnswer={showAnswer}
                handleFlip={handleFlip}
              />
            </Draggable>
          </div>
          <div className="">
            <button onClick={next}>next</button>
          </div>
          <div>
            <button onClick={handleFlip}>Flip</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Page;
