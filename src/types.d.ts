export interface Card {
  name: string;
  question: string;
  answer: string;
  category: string;
  tags?: string[];
  ref?: string;
}

export interface CardWithId extends Card {
  id: string;
}
export interface Point {
  x: number;
  y: number;
}
