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

  const { currentCard, nextCard, setNextCard, getRandomCards } = useDeck({
    category,
  });

  const next = () => {
    setNextCard();
    if (nextCard == null) return;
    router.push(`/${category}/${nextCard?.name}`);
  };

  const handleRest = () => {
    // getRandomCards();
    router.push(`/${category}`);
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
                handleFlip={() => {}}
              />
            </Draggable>
          </div>
          <div className="">
            <button onClick={next}>next</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Page;
