"use client";
import { createContext, useCallback, useState } from "react";
import { CardWithId } from "../types";
import { useRouter } from "next/navigation";
import { getErrorMessage } from "~/util/errorHandling";

interface DeckProps {
  deck: CardWithId[];
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

  const [deck, setDeck] = useState<CardWithId[]>([]);
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAnswerShown, setIsAnswerShown] = useState(false);
  const [displayControlFooter, setDisplayControlFooter] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
    setIsAnswerShown(false);
    setCategory(category);
    const res = await getRandomCards({ category });

    let newDeck: CardWithId[] = [];

    if (currentCardId != null) {
      const firstCard = res.find(
        (arr: CardWithId) => arr.name === currentCardId,
      );

      if (!firstCard) {
        newDeck = [];
      } else {
        newDeck = [
          firstCard,
          ...res.filter((arr: CardWithId) => arr.name !== currentCardId),
        ];
      }
    } else {
      newDeck = [...res];
    }

    setDeck(newDeck);
    setIsLoading(false);
  };

  const peekCard = (position: number) => {
    return deck[position];
  };

  const peekSecondCard = (): CardWithId | undefined => {
    return peekCard(1);
  };

  const next = useCallback(() => {
    const nextCard = peekSecondCard();

    if (!nextCard) {
      setDeck([]);
      return;
    }

    router.push(`/${category}/${nextCard.name}`);
    setIsAnswerShown(false);
    shift();
  }, [deck]);

  const shift = () => {
    setDeck((prev: any) => {
      const newDeck = [...prev];
      newDeck.shift();
      return newDeck;
    });
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
