/* eslint-disable @typescript-eslint/no-empty-function */
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware"; // Import devtools
import { getCardsById, getRandomCards } from "~/lib/cardsService";
import { type CardWithId } from "~/types";

// Define the state interface
interface DeckState {
  deck: CardWithId[];
  category: string;
  excluded: number[];
  isLoading: boolean;
  isAnswerShown: boolean;
  displayControlFooter: boolean;
  error: object | null;
  getCards: (args: {
    category: string;
    currentCardId?: string;
  }) => Promise<void>;
  setExcluded: (val: number[]) => void;
  setIsAnswerShown: (val: boolean | ((prev: boolean) => boolean)) => void;
  setDisplayControlFooter: (
    val: boolean | ((prev: boolean) => boolean),
  ) => void;
  next: () => void;
}

// Initialize the store state
const initialState: DeckState = {
  deck: [],
  category: "",
  excluded: [],
  isLoading: false,
  isAnswerShown: false,
  displayControlFooter: true,
  error: null,
  getCards: async () => {},
  setExcluded: () => {},
  setIsAnswerShown: () => {},
  setDisplayControlFooter: () => {},
  next: () => {},
};

// Create the zustand store with devtools middleware
export const useDeckStore = create<DeckState>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState, // Spread initial state

        // Define the actions (getCards, setExcluded, etc.)
        getCards: async ({
          category,
          currentCardId,
        }: {
          category: string;
          currentCardId?: string;
        }) => {
          set({ isLoading: true });
          set({ isAnswerShown: false });
          set({ category });

          const { excluded } = get();
          try {
            const newDeck = currentCardId
              ? await getCardsById({ excluded, category, id: currentCardId })
              : await getRandomCards({ excluded, category });

            const firstId = newDeck[0]?.id;
            if (newDeck.length > 0 && firstId) {
              set((state) => ({ excluded: [...state.excluded, firstId] }));
            }

            set({ deck: newDeck });
            set({ isLoading: false });
          } catch (error: unknown) {
            if (error instanceof Error) {
              set({ error });
            } else {
              set({ error: new Error("Unknown error occurred") });
            }
          }
        },

        setExcluded: (val: number[]) => set({ excluded: val }),

        setIsAnswerShown: (val: boolean | ((prev: boolean) => boolean)) =>
          set((state) => ({
            isAnswerShown:
              typeof val === "function" ? val(state.isAnswerShown) : val,
          })),

        setDisplayControlFooter: (
          val: boolean | ((prev: boolean) => boolean),
        ) =>
          set((state) => ({
            displayControlFooter:
              typeof val === "function" ? val(state.displayControlFooter) : val,
          })),

        next: () => {
          const { deck } = get();

          if (deck.length > 1) {
            const nextCard = deck[1];
            if (nextCard) {
              set((state) => ({ excluded: [...state.excluded, nextCard.id] }));
            }
          }
          set((state) => ({ deck: state.deck.slice(1), isAnswerShown: false }));
        },
      }),
      {
        name: "deck-storage",
        partialize: (state: DeckState) => ({
          deck: state.deck,
          category: state.category,
          excluded: state.excluded,
          isAnswerShown: state.isAnswerShown,
          displayControlFooter: state.displayControlFooter,
        }),
      },
    ),
  ),
);
