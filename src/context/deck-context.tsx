"use client";
import { createContext, useCallback, useState } from "react";
import { CardWithId } from "../types";
import { useRouter } from "next/navigation";
import { getErrorMessage } from "~/util/errorHandling";

interface DeckProps {
  deck: CardWithId[];
  category: string;
  excluded: string[];
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
  excluded: [],
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
  const [excluded, setExcluded] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  //TODO refactor
  const getRandomCards = async ({ category }: any) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        excluded: excluded,
        limit: 5,
      }),
    };

    try {
      const res = await fetch(`/api/cards?cat=${category}`, options);
      const resJson = await res.json();

      if (resJson == null) return [];
      return resJson;
    } catch (e) {
      setError(getErrorMessage(e));
      return [];
    }
  };

  const fetchData = async ({ category, currentCardId, limit, offset }: any) => {
    setIsLoading(true);
    setIsAnswerShown(false);
    setCategory(category);
    const res = await getRandomCards({ category, limit, offset });

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

    const firstId = newDeck[0]?.id;
    if (newDeck.length > 0 && firstId != null) {
      setExcluded((prev) => [...prev, firstId]);
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

    setExcluded((prev) => [...prev, nextCard.id]);

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
        excluded,
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
