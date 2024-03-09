import { use, useContext, useEffect } from "react";
import { Card } from "../app/types";
import { getCardsByCategory } from "@/services/getCards";
import { FlashCardsContext } from "@/context/flashCardsContext";

interface Props {
  category: string;
  currentCardId?: string;
}

function useFlashCards({ category, currentCardId }: Props) {
  const { deck, setDeck } = useContext<any>(FlashCardsContext);

  useEffect(() => {
    const cards = getCardsByCategory(category);

    if (currentCardId) {
      const currentCard = cards.find((card: Card) => card.id === currentCardId);
      const restOfDeck = cards.filter(
        (card: Card) => card.id !== currentCardId
      );
      shuffle(restOfDeck);

      if (!currentCard) return;

      restOfDeck.push(currentCard);
      setDeck(restOfDeck);
      return;
    }
    const shuffledCards = shuffle(cards);
    setDeck(shuffledCards);
  }, [category, currentCardId]);

  const shuffle = (deck: Card[]) => {
    return deck.sort(() => Math.random() - 0.5);
  };

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
    currentCard: peek(),
    setNextCard: pop,
    nextCard: peekSecondCard(),
    size: size(),
  };
}

export default useFlashCards;
