"use client";
import { createContext, useState } from "react";
import { Card } from "../types";
import { useRouter } from "next/navigation";
import { getErrorMessage } from "~/util/errorHandling";

interface DeckProps {
  deck: Card[];
  category: string;
  fetchData: ({ category, currentCardId }: any) => void;
  next: () => void;

  isLoading: boolean;
  setIsLoading: (val: boolean) => void;
  isAnswerShown: boolean;
  setIsAnswerShown: (val: boolean | ((prev: boolean) => boolean)) => void;
  displayControlFooter: boolean;
  setDisplayControlFooter: (
    val: boolean | ((prev: boolean) => boolean),
  ) => void;
}

export const DeckContext = createContext<DeckProps>({
  deck: [],
  category: "",
  fetchData: () => {},
  next: () => {},
  isLoading: false,
  setIsLoading: () => {},
  isAnswerShown: false,
  setIsAnswerShown: () => {},
  displayControlFooter: false,
  setDisplayControlFooter: () => {},
});

export function DeckProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const [deck, setDeck] = useState<Card[]>([]);
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAnswerShown, setIsAnswerShown] = useState(false);
  const [displayControlFooter, setDisplayControlFooter] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // const flip = () => {
  //   setIsAnswerShown((prev) => !prev);
  // };

  const getRandomCards = async ({ category }: any) => {
    try {
      const res = await fetch(`/api/cards?cat=${category}`);
      const resJson = await res.json();

      if (resJson == null) return;
      return resJson;
    } catch (e) {
      setError(getErrorMessage(e));
    }
  };

  const fetchData = async ({ category, currentCardId }: any) => {
    setIsLoading(true);
    setCategory(category);
    const blank = {};

    const res = await getRandomCards({ category });

    let newDeck = [];

    if (currentCardId != null) {
      const firstCard = res.find((arr: Card) => arr.name === currentCardId);

      newDeck = [
        ...res.filter((arr: Card) => arr.name !== currentCardId),
        firstCard,
      ];
    } else {
      newDeck = [...res];
      // newDeck.push(blank);
    }

    console.log({ newDeck });
    setDeck(newDeck);
    setIsLoading(false);
  };

  const peekCard = (position: number) => {
    return deck[deck.length - position];
  };

  const peekSecondCard = (): Card | undefined => {
    return peekCard(deck.length - 1);
  };

  const next = () => {
    console.log({ deck });

    const nextCard = peekSecondCard();
    pop();

    if (nextCard == null) {
      setDisplayControlFooter(false);
      return;
    }

    console.log(`next: ${nextCard.name}`);
    router.push(`/${category}/${nextCard?.name}`);
  };

  const pop = (): Card | undefined => {
    const newDeck = [...deck];
    const elem = newDeck.pop();

    console.log(`pop: ${elem?.name}`);
    setDeck(newDeck);

    return elem;
  };

  // const size = () => {
  //   return deck.length;
  // };

  // const peek = (): Card | undefined => {
  //   return deck[deck.length - 1];
  // };

  return (
    <DeckContext.Provider
      value={{
        deck,
        category,
        fetchData,
        next,

        isLoading,
        setIsLoading,
        isAnswerShown,
        setIsAnswerShown,
        displayControlFooter,
        setDisplayControlFooter,
      }}
    >
      {children}
    </DeckContext.Provider>
  );
}
