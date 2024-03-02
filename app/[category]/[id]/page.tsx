"use client";

import useFlashCards from "@/app/hooks/useFlashCards";
import FlashCard from "@/components/UI/flashCard";
import { FlipSvg } from "@/components/svgs/flipSvg";
import { NextSvg } from "@/components/svgs/nextSvg";
import { startDrag } from "@/helpers/dragHelper";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Page({ params }: { params: { category: string; id: string } }) {
  const router = useRouter();
  const [showAnswer, setShowAnswer] = useState(false);

  let isAnimating = false;

  const { category, id } = params;

  const { currentCard, pickNextCard, setNextCard } = useFlashCards({
    category: "JavaScript",
    currentCardId: id,
  });

  const nextCard = pickNextCard();

  const next = () => {
    if (nextCard == null) return;
    setNextCard(), router.push(`/${category}/${nextCard.id}`);
  };

  const dragEvent = (e: MouseEvent | TouchEvent) => {
    startDrag({
      isAnimating,
      e,
      next,
    });
  };

  document.addEventListener("mousedown", dragEvent);
  document.addEventListener("touchstart", dragEvent, { passive: true });

  const handleFlip = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <>
      <section className="relative w-[38vh] h-[60vh] md:h-[50vh] md:w-[60vh] aspect-video">
        {currentCard && (
          <div className="draggable h-full w-full absolute z-20">
            <FlashCard
              id={currentCard.id}
              key={currentCard.id}
              question={currentCard.question}
              answer={currentCard["sort-answer"]}
              hasExtendedContent={currentCard["extended-content"] != null}
              showAnswer={showAnswer}
              handleFlip={handleFlip}
            />
          </div>
        )}
        {nextCard != null && (
          <div className="h-full w-full relative">
            <div className="h-full w-full absolute transform1">
              <FlashCard
                id={nextCard.id}
                key={nextCard.id}
                question={nextCard.question}
                answer={nextCard["sort-answer"]}
                hasExtendedContent={nextCard["extended-content"] != null}
              />
            </div>
            <div className="first h-full w-full absolute transform1">
              <FlashCard
                id={nextCard.id}
                key={nextCard.id}
                question={nextCard.question}
                answer={nextCard["sort-answer"]}
                hasExtendedContent={nextCard["extended-content"] != null}
              />
            </div>
          </div>
        )}

        {currentCard == null && (
          <div className="h-full w-full absolute z-20 flex items-center justify-center">
            <div className="text-white text-3xl">No more cards</div>
          </div>
        )}
      </section>

      {nextCard && (
        <footer className="text-white mt-10 flex gap-9 justify-center">
          <Link
            className="transition hover:scale-110 duration-300 ease-in-out"
            href={`/${category}/${nextCard.id}`}
            onClick={() => {
              setNextCard();
            }}
          >
            <div className="bg-white rounded-full block p-4">
              <NextSvg />
            </div>
          </Link>
          <button
            onClick={handleFlip}
            className="transition hover:scale-110 duration-300 ease-in-out"
          >
            <div className="bg-white rounded-full block p-4">
              <FlipSvg />
            </div>
          </button>
        </footer>
      )}
    </>
  );
}

export default Page;
