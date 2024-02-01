import { use, useContext, useEffect, useState } from "react";
import { Card } from "../types";
import { getCardsByCategory } from "@/services/getCards";
import { FlashCardsContext } from "@/app/context/flashCardsContext";

interface Props {
  category: string;
  currentCardId?: string;
}

function useFlashCards({ category, currentCardId }: Props) {
  // const [deck, setDeck] = useState<Card[]>([]);
  const { deck, setDeck } = useContext<any>(FlashCardsContext);

  const [currentCard, setCurrentCard] = useState<Card | null>(null);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const cards = getCardsByCategory(category);
    const shuffledCards = cards.sort(() => Math.random() - 0.5);

    setDeck(shuffledCards);
    console.log({ shuffledCards });
    // setCurrentCard(shuffledCards[0]);
    // setIndex(0);
  }, [category, setDeck]);

  useEffect(() => {
    console.log(currentCardId);
    if (currentCardId) {
      const cardIndex = deck.findIndex(
        (card: Card) => card.id === currentCardId
      );
      setCurrentCard(deck[cardIndex]);
      setIndex(cardIndex);
    } else {
      setCurrentCard(deck[0]);
      setIndex(0);
    }
  }, [currentCardId, deck]);

  const setNextCard = () => {
    const newIndex = index + 1;
    setIndex(newIndex);
    setCurrentCard(deck[newIndex]);
  };

  const pickNextCard = () => {
    return deck[index + 1];
  };
  return { deck, currentCard, setNextCard, pickNextCard };
}

export default useFlashCards;
