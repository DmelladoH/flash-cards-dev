"use client";

import useFlashCards from "@/app/hooks/useFlashCards";
import FlashCard from "@/components/UI/flashCard";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Page({ params }: { params: { category: string; id: string } }) {
  const router = useRouter();

  let isAnimating = false;
  let pullDeltaX: number;

  const CARD_DECISION_THRESHOLD = 120;

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

  function startDrag(e: MouseEvent | TouchEvent) {
    if (isAnimating || e == null) return;

    const card = (e.target as HTMLElement)?.closest("article");

    if (!card) return;

    const startX =
      e instanceof MouseEvent
        ? (e as MouseEvent).pageX
        : (e as TouchEvent).touches[0].pageX;

    const onMove = (e: MouseEvent | TouchEvent) => {
      const currentPosition =
        e instanceof MouseEvent ? e.pageX : e.touches[0].pageX;

      pullDeltaX = currentPosition - startX;

      if (pullDeltaX === 0) return;

      const deg = pullDeltaX / 10;

      card.style.transform = `translateX(${pullDeltaX}px) rotate(${deg}deg)`;
    };

    const onEnd = (e: any) => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("touchmove", onMove);

      document.removeEventListener("mouseup", onEnd);
      document.removeEventListener("touchend", onEnd);

      const isCardDecision = Math.abs(pullDeltaX) > CARD_DECISION_THRESHOLD;

      if (isCardDecision) {
        card.style.transition = "transform 0.5s";
        card.style.transform = `translateX(${
          pullDeltaX > 0 ? 1000 : -1000
        }px) rotate(${pullDeltaX > 0 ? 90 : -90}deg)`;

        card.addEventListener(
          "transitionend",
          () => {
            isAnimating = false;
            pullDeltaX = 0;
            next();
          },
          { once: true }
        );
      } else {
        card.style.transition = "transform 0.5s";
        card.style.transform = "translateX(0) rotate(0deg)";
      }

      card.addEventListener(
        "transitionend",
        () => {
          isAnimating = false;
          pullDeltaX = 0;
        },
        { once: true }
      );
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("touchmove", onMove, { passive: true });

    document.addEventListener("mouseup", onEnd);
    document.addEventListener("touchend", onEnd);
  }

  document.addEventListener("mousedown", startDrag);
  document.addEventListener("touchstart", startDrag, { passive: true });

  return (
    <>
      <section className="relative w-[40vh] h-[70vh] md:h-[50vh] md:w-[60vh] aspect-video">
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
        {nextCard != null && (
          <div className="h-full w-full relative transform1">
            <FlashCard
              id={nextCard.id}
              key={nextCard.id}
              question={nextCard.question}
              answer={nextCard["sort-answer"]}
              hasExtendedContent={nextCard["extended-content"] != null}
            />
          </div>
        )}

        {currentCard == null && (
          <div className="h-full w-full absolute z-20 flex items-center justify-center">
            <div className="text-white text-3xl">No more cards</div>
          </div>
        )}
      </section>

      {nextCard && (
        <footer className="text-white mt-10">
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
