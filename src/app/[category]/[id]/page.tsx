"use client";
import { useEffect } from "react";
import Deck from "~/components/deck";
import { EmptyState } from "~/components/empty-state";
import { useDeckContext } from "~/hooks/useDeckContext";

function Page({ params }: { params: { category: string; id: string } }) {
  const { category, id } = params;

  const { deck, fetchData } = useDeckContext();

  useEffect(() => {
    if (deck.length) return;

    fetchData({ category, currentCardId: id });
  }, []);

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
