"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ControlFooter } from "~/components/control-footer";
import Deck from "~/components/deck";
import { EmptyState } from "~/components/empty-state";
import { nextCardByAction } from "~/helpers/dragHelper";
import { useDeck } from "~/hooks/useDeck";

function Page({ params }: { params: { category: string; id: string } }) {
  const router = useRouter();
  const { category, id } = params;
  const [showAnswer, setShowAnswer] = useState(false);
  const [displayControlFooter, setDisplayControlFooter] = useState(true);

  const { nextCard, setNextCard } = useDeck({
    category,
    currentCardId: id,
  });

  useEffect(() => {
    setNextCard();
  }, []);

  const next = () => {
    if (nextCard == null) {
      setDisplayControlFooter(false);
      return;
    }
    router.push(`/${category}/${nextCard?.name}`);
  };

  const flip = () => {
    setShowAnswer((prev) => !prev);
  };

  return (
    <div>
      <div className="relative mb-10">
        <div className="absolute h-full w-full">
          <EmptyState category={category} />
        </div>
        <Deck
          category={category}
          currentCardId={id}
          showAnswer={showAnswer}
          flip={flip}
          nextAction={next}
        />
      </div>
      {displayControlFooter && (
        <ControlFooter
          handleFlip={flip}
          handleNextCard={() => nextCardByAction(next)}
          isFlipped={showAnswer}
        />
      )}
    </div>
  );
}

export default Page;
