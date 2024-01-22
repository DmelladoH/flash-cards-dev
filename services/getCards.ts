import { Card } from "@/app/types";
import cardsData from "@/services/mockData/cardsData.json";

export function getCardsByCategory(category: string): Card[]{
    return cardsData.filter(card => card.category === category) || [];
}