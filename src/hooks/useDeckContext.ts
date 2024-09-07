import { useContext } from "react";
import { DeckContext } from "~/context/deck-context";

export function useDeckContext() {
  const context = useContext(DeckContext);

  if (context == null) {
    throw new Error("Error: deck must be use within deckContext");
  }

  return context;
}
