"use client";
import { redirect, usePathname } from "next/navigation";
import { useEffect } from "react";
import { useDeck } from "~/hooks/useDeck";

function Page() {
  const pathname = usePathname();
  const category = pathname.slice(1);

  const { pop, setDeck, deck } = useDeck();

  useEffect(() => {
    const a = async () => {
      const res = await fetch("/api/cards?cat=JavaScript");
      const resJson = await res.json();
      if (resJson == null) return;

      setDeck(resJson);
    };

    a();
  }, [category]);
}

export default Page;
