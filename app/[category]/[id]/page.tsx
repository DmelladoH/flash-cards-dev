"use client";

import useFlashCards from "@/app/hooks/useFlashCards";
import FlashCard from "@/components/UI/flashCard";
import Link from "next/link";

function Page({ params }: { params: { category: string; id: string } }) {
  const { category, id } = params;
  const { currentCard, deck, pickNextCard, setNextCard } = useFlashCards({
    category: "JavaScript",
    currentCardId: id,
  });

  const nextCard = pickNextCard();

  return (
    <>
      <div className="relative w-[40vh] h-[70vh] md:h-[50vh] md:w-[60vh] aspect-video">
        {currentCard && (
          <div className="h-full w-full absolute z-20">
            <FlashCard
              id={currentCard.id}
              key={currentCard.id}
              question={currentCard.question}
              answer={currentCard["sort-answer"]}
              hasExtendedContent={currentCard["extended-content"] != null}
            />
          </div>
        )}
        {pickNextCard() && (
          <div className="h-full w-full relative transform1">
            <FlashCard
              id={pickNextCard().id}
              key={pickNextCard().id}
              question={pickNextCard().question}
              answer={pickNextCard()["sort-answer"]}
              hasExtendedContent={pickNextCard()["extended-content"] != null}
            />
          </div>
        )}
      </div>

      {nextCard && (
        <footer className="text-white">
          <Link
            href={`/${category}/${nextCard.id}`}
            onClick={() => {
              setNextCard();
            }}
          >
            Next
          </Link>
        </footer>
      )}
    </>
  );
}

export default Page;
