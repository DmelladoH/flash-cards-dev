import { useCallback, useContext, useEffect, useState } from "react";
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

  if (context == null) {
    throw new Error("Error: deck must be use within deckContext");
  }

  const { deck, setDeck } = context;

  const getRandomCards = useCallback(async () => {
    try {
      setIsLoading(true);

      const res = await fetch(`/api/cards?cat=${category}`);
      const resJson = await res.json();

      if (resJson == null) return;
      return resJson;
    } catch (e) {
      setError(getErrorMessage(e));
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (deck != null && deck[0]?.category === category) return;
    getRandomCards().then((res) => {
      let deck = res;

      if (currentCardId != null) {
        const firstCard = res.find((arr: Card) => arr.name === currentCardId);
        deck = [
          ...res.filter((arr: Card) => arr.name !== currentCardId),
          firstCard,
        ];
      }
      setDeck(deck);
    });
  }, [category, currentCardId]);

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
    getRandomCards,
    currentCard: peek(),
    setNextCard: pop,
    nextCard: peekSecondCard(),
    size: size(),
  };
}
