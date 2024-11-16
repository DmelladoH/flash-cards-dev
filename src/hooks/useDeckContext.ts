import { useDeckStore } from "~/store/deckStore";

export function useDeckContext() {
  const context = useDeckStore();

  if (context == null) {
    throw new Error("Error: deck must be use within deckContext");
  }

  return context;
}
