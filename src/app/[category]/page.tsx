"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useDeck } from "~/hooks/useDeck";
import { useDeckContext } from "~/hooks/useDeckContext";

function Page({ params }: { params: { category: string } }) {
  const { category } = params;

  // const { currentCard, error, isLoading } = useDeck({ category });

  const { deck, isLoading, fetchData } = useDeckContext();

  useEffect(() => {
    fetchData({ category });
  }, []);

  // if (error != null) {
  //   return <div>404: card wasn't found </div>;
  // }

  if (isLoading) {
    return <p>loading...</p>;
  }

  deck.length && redirect(`${category}/${deck[0]?.name}`);
}

export default Page;
