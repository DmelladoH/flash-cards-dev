// import "server-only";
import { Card } from "~/types";
import { data } from "./mockData/data";
import { db } from "./db";
import { cards } from "./db/schema";
import { sql } from "drizzle-orm";

export async function getCartsByCategory({
  category,
  limit,
  excluded,
}: any): Promise<any[]> {
  try {
    if (excluded.length === 0) {
      return await db.query.cards.findMany({
        where: (model, { eq }) => eq(model.category, category),
        limit: limit,
        orderBy: sql`RANDOM()`,
      });
    } else {
      return await db.query.cards.findMany({
        where: (model, { eq, notInArray }) =>
          eq(model.category, category) && notInArray(model.id, excluded),
        limit: limit,
        orderBy: sql`RANDOM()`,
      });
    }
    // const mock = data.filter((item: Card) => item.category === category);
    // return mock;
  } catch (e: any) {
    throw new Error("Error getting cards: ", e);
  }
}

export async function getCartById(id: string): Promise<
  | {
      id: number;
      name: string;
      question: string;
      answer: string;
      category: string;
    }
  | undefined
> {
  try {
    const res = await db.query.cards.findFirst({
      where: (model, { eq }) => eq(model.name, id),
    });

    return res;
  } catch (e) {
    throw new Error("Error getting the card");
  }
}

export async function addCards(cardList: Card[]) {
  try {
    await db.insert(cards).values([...cardList]);
  } catch (e) {
    throw new Error("Error adding the card");
  }
}

export async function removeAllCards() {
  try {
    await db.delete(cards);
  } catch (e) {
    throw new Error("Error removing the card");
  }
}
