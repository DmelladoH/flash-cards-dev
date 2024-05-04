"use client";

import { useContext, useEffect } from "react";
import { DeckContext } from "~/context/deck-context";
import { getCartsByCategory } from "~/server/queries";

function Page({ params: { category } }: { params: { category: string } }) {
  const { deck, setDeck } = useContext(DeckContext);

  useEffect(() => {
    const a = async () => {
      const res = await getCartsByCategory(category);
      console.log();
      setDeck(res);
    };

    a();
  }, [category]);

  console.log({ deck });

  return <>{JSON.stringify(deck)}</>;
}

export default Page;
