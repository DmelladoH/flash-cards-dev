// import "server-only";
import { Card } from "~/types";
import { data } from "./data/data";
import { db } from "./db";

export async function getCategories() {
  const categories = ["js", "ts"];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categories);
    }, 100);
  });
}

export async function getCartsByCategory(category: string): Promise<any[]> {
  try {
    // const res = await db.query.cards.findMany({
    //   where: (model, { eq }) => eq(model.category, category),
    // });
    const mock = data.filter((item: Card) => item.category === category);
    return mock;
  } catch (e) {
    throw new Error("Error getting cards");
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
