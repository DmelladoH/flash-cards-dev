import { useContext } from "react";
import { DeckContext } from "~/context/deck-context";
import { Card } from "~/types";

export function useDeck() {
  const context = useContext(DeckContext);

  if (context == null) {
    throw new Error("Error: deck must be use within deckContext");
  }

  const { deck, setDeck } = context;

  const peek = (): Card | undefined => {
    return deck[deck.length - 1];
  };

  const pop = (): Card | undefined => {
    const newDeck = [...deck];
    const elem = newDeck.pop();

    setDeck(newDeck);

    return elem;
  };

  return { deck, setDeck, pop, peek };
}
