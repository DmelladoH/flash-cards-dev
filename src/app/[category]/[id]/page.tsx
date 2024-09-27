"use client";
import { useEffect, useState } from "react";
import Deck from "~/components/deck";
import { EmptyState } from "~/components/empty-state";
import { Loader } from "~/components/svgs/loader";
import { useDeckContext } from "~/hooks/useDeckContext";

function Page({ params }: { params: { category: string; id: string } }) {
  const { category, id } = params;
  const [isLoadingCards, setIsLoadingCards] = useState(false);
  const { deck, fetchData, isLoading } = useDeckContext();

  useEffect(() => {
    if (deck.length) return;
    setIsLoadingCards(true);
    fetchData({ category, currentCardId: id });
    setIsLoadingCards(false);
  }, []);

  debugger;

  if (isLoading || isLoadingCards) {
    return <Loader />;
  }

  if (deck.length === 0) {
    return <></>;
  }
  return (
    <div className="relative">
      <div className="absolute h-full w-full">
        <EmptyState category={category} />
      </div>
      <Deck />
    </div>
  );
}

export default Page;
