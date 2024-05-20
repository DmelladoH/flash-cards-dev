import { useContext, useEffect, useRef, useState } from "react";
import { DeckContext } from "~/context/deck-context";
import { Card } from "~/types";
import { getErrorMessage } from "~/util/errorHandling";

interface Props {
  category: string;
  currentCardId?: string;
}

export function useDeck({ category, currentCardId }: Props) {
  const context = useContext(DeckContext);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const prevCategoryRef = useRef("");

  if (context == null) {
    throw new Error("Error: deck must be use within deckContext");
  }

  const { deck, setDeck } = context;

  useEffect(() => {
    const getRandomCards = async () => {
      try {
        setIsLoading(true);

        const res = await fetch(`/api/cards?cat=${category}`);
        const resJson = await res.json();

        if (resJson == null) return;
        setDeck(resJson);
      } catch (e) {
        setError(getErrorMessage(e));
      } finally {
        setIsLoading(false);
      }
    };

    if (prevCategoryRef.current == category) return;
    getRandomCards();
    prevCategoryRef.current = category;
  }, [category]);

  const size = () => {
    return deck.length;
  };

  const peek = (): Card | undefined => {
    return deck[deck.length - 1];
  };

  const pop = (): Card | undefined => {
    const newDeck = [...deck];
    const elem = newDeck.pop();

    setDeck(newDeck);

    return elem;
  };

  const peekSecondCard = (): Card | undefined => {
    return deck[deck.length - 2];
  };

  return {
    deck,
    error,
    isLoading,
    currentCard: peek(),
    setNextCard: pop,
    nextCard: peekSecondCard(),
    size: size(),
  };
}
