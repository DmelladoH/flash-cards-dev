"use client";
import { createContext, useState } from "react";
import { Card } from "../types";

interface DeckProps {
  deck: Card[];
  setDeck: (deck: Card[]) => void;
}

export const DeckContext = createContext<DeckProps>({
  deck: [],
  setDeck: () => {},
});

export function DeckProvider({ children }: { children: React.ReactNode }) {
  const [deck, setDeck] = useState<Card[]>([]);

  return (
    <DeckContext.Provider value={{ deck, setDeck }}>
      {children}
    </DeckContext.Provider>
  );
}
