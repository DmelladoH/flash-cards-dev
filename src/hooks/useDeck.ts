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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (context == null) {
    throw new Error("Error: deck must be use within deckContext");
  }

  const { deck, setDeck } = context;

  const getRandomCards = useCallback(async () => {
    try {
      const res = await fetch(`/api/cards?cat=${category}`);
      const resJson = await res.json();

      if (resJson == null) return;
      return resJson;
    } catch (e) {
      setError(getErrorMessage(e));
    }
  }, [category]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const blank = {};

      const res = await getRandomCards();

      let newDeck = [];

      if (currentCardId != null) {
        const firstCard = res.find((arr: Card) => arr.name === currentCardId);

        newDeck = [
          ...res.filter((arr: Card) => arr.name !== currentCardId),
          firstCard,
        ];
      } else {
        newDeck = [...res];
        newDeck.push(blank);
      }

      setDeck(newDeck);
      setIsLoading(false);
    };

    if (deck != null && deck[1]?.category === category) return;
    fetchData();
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

  const peekCard = (position: number) => {
    return deck[deck.length - position];
  };

  const peekSecondCard = (): Card | undefined => {
    return peekCard(2);
  };

  return {
    deck,
    error,
    isLoading,
    currentCard: peek(),
    setNextCard: pop,
    nextCard: peekSecondCard(),
    peekCard,
    size: size(),
  };
}
