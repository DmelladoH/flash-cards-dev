"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import FlashCard from "~/components/card";
import { ControlFooter } from "~/components/control-footer";
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
    setNextCard();
    if (nextCard == null) return;
    router.push(`/${category}/${nextCard?.name}`);
  };

  const buttonNext = () => {
    const card = document.getElementById("flashcard");
    const bgCard = document.getElementById("backgroundCard")?.closest("div");
    if (!card) return;

    card.style.transition = "transform 1.2s";
    card.style.transform = `translateX(${2000}px) rotate(${90}deg)`;

    if (bgCard) {
      bgCard.style.transition = "transform 1.2s";
      bgCard.style.transform = `rotate(0deg)`;
    }

    setTimeout(() => {
      next();
    }, 500);
  };

  const handleRest = () => {
    router.push(`/${category}`);
  };

  const flip = () => {
    setShowAnswer((prev) => !prev);
  };
  if (currentCard == null)
    return (
      <div className="grid gap-2">
        <p>There are no more cards</p>
        <button onClick={handleRest} className="">
          reset
        </button>
      </div>
    );
  return (
    <div>
      {currentCard && (
        <>
          <div className="relative aspect-video h-[60vh] w-[38vh] md:h-[50vh] md:w-[60vh]">
            <Draggable action={next}>
              <FlashCard
                id="flashcard"
                question={currentCard.question}
                answer={currentCard.answer}
                showAnswer={showAnswer}
                handleFlip={flip}
              />
            </Draggable>
            {nextCard && (
              <div className="transform-bg-card absolute h-full w-full">
                <FlashCard
                  id="backgroundCard"
                  question={nextCard.question}
                  answer={nextCard.answer}
                />
              </div>
            )}
          </div>
          <ControlFooter handleFlip={flip} handleNextCard={buttonNext} />
        </>
      )}
    </div>
  );
}

export default Page;
