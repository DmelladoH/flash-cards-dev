"use client";
import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";
import { DeckContext } from "~/context/deck-context";

function Page() {
  const pathname = usePathname();
  const category = pathname.slice(1);

  const { deck, setDeck } = useContext(DeckContext);

  useEffect(() => {
    const a = async () => {
      const res = await fetch("/api/cards?cat=JavaScript");
      const resJson = await res.json();
      if (resJson == null) return;

      setDeck(resJson);
    };

    a();
  }, [category]);

  return (
    <div className="text-white">
      <p>carts:</p>
      {JSON.stringify(deck)}
    </div>
  );
}

export default Page;
