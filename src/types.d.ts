export interface Card {
  id: string;
  name: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
}

export interface Point {
  x: number;
  y: number;
}
