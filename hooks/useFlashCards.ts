import { useContext, useEffect, useState } from "react";
import { Card } from "../app/types";
import { getCardsByCategory } from "@/services/getCards";
import { FlashCardsContext } from "@/context/flashCardsContext";

interface Props {
  category: string;
  currentCardId?: string;
}

function useFlashCards({ category, currentCardId }: Props) {
  // const [deck, setDeck] = useState<Card[]>([]);
  const { deck, setDeck } = useContext<any>(FlashCardsContext);

  // const [currentCard, setCurrentCard] = useState<Card | null>(null);
  // const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (currentCardId) {
      const currentCard = deck.find((card: Card) => card.id === currentCardId);
      const restOfDeck = deck.filter((card: Card) => card.id !== currentCardId);
      shuffle(restOfDeck);
      restOfDeck.push(currentCard);
      setDeck(restOfDeck);

      return;
    }

    const cards = getCardsByCategory(category);
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

  // useEffect(() => {

  //   if (currentCardId) {
  //     const cardIndex = deck.findIndex(
  //       (card: Card) => card.id === currentCardId
  //     );
  //     setCurrentCard(deck[cardIndex]);
  //     setIndex(cardIndex);
  //   } else {
  //     setCurrentCard(deck[0]);
  //     setIndex(0);
  //   }
  // }, [currentCardId, deck]);

  // const setNextCard = () => {
  //   const newIndex = index + 1;
  //   setIndex(newIndex);
  //   setCurrentCard(deck[newIndex]);
  // };

  // const pickNextCard = () => {
  //   return deck[index + 1];
  // };

  return {
    deck,
    currentCard: peek(),
    setNextCard: pop,
    nextCard: peekSecondCard(),
    size: size(),
  };
}

export default useFlashCards;
