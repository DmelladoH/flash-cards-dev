import { createContext, useState } from "react";
import { Card } from "../types";

interface FlashCardsContextProps {
  deck: Card[];
  setDeck?: any;
}

export const FlashCardsContext = createContext<FlashCardsContextProps>({
  deck: [],
});

export const FlashCardProvider = ({ children }: any) => {
  const [deck, setDeck] = useState<Card[]>([]);

  return (
    <FlashCardsContext.Provider value={{ deck, setDeck }}>
      {children}
    </FlashCardsContext.Provider>
  );
};
