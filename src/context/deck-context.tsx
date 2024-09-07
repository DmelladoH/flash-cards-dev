"use client";
import { createContext, useCallback, useEffect, useState } from "react";
import { Card } from "../types";
import { useRouter } from "next/navigation";
import { getErrorMessage } from "~/util/errorHandling";

interface DeckProps {
  deck: Card[];
  category: string;
  fetchData: ({
    category,
    currentCardId,
  }: {
    category: string;
    currentCardId?: string;
  }) => Promise<void>;
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

const defaultDeckContext: DeckProps = {
  deck: [],
  category: "",
  fetchData: async () => {},
  next: () => {},
  isLoading: false,
  setIsLoading: () => {},
  isAnswerShown: false,
  setIsAnswerShown: () => {},
  displayControlFooter: false,
  setDisplayControlFooter: () => {},
};

export const DeckContext = createContext<DeckProps>(defaultDeckContext);

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

  useEffect(() => {
    console.log({ deck });
  }, [deck]);

  const getRandomCards = async ({ category }: any) => {
    try {
      const res = await fetch(`/api/cards?cat=${category}`);
      const resJson = await res.json();

      if (resJson == null) return [];
      return resJson;
    } catch (e) {
      setError(getErrorMessage(e));
      return [];
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
        firstCard,
        ...res.filter((arr: Card) => arr.name !== currentCardId),
      ];
    } else {
      newDeck = [...res];
      // newDeck.push(blank);
    }

    setDeck(newDeck);
    setIsLoading(false);
  };

  const peekCard = (position: number) => {
    return deck[position];
  };

  const peekSecondCard = (): Card | undefined => {
    return peekCard(1);
  };

  const next = useCallback(() => {
    console.log("triggering next");
    console.log(`Current deck:`);
    console.log({ deck });
    const nextCard = peekSecondCard();
    shift(() => {
      if (!nextCard) {
        // setDisplayControlFooter(false);
        return;
      }
      console.log({ nextCard });
      router.push(`/${category}/${nextCard.name}`);
    });
  }, [deck]);

  const shift = (callback: () => void) => {
    setDeck((prev: any) => {
      const newDeck = [...prev];
      newDeck.shift();
      return newDeck;
    });
    callback();
  };

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
