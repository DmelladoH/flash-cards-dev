import { Card } from "@/app/types";

export const getRandomCard = (cards: Card[]): Card => {
    return cards[Math.floor(Math.random() * cards.length)];
}