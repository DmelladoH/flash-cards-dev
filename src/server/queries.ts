// import "server-only";
import { Card } from "~/types";
import { db } from "./db";
import { cards } from "./db/schema";
import { sql } from "drizzle-orm";

export async function getCartsWithIdAndCategory({
  category,
  id,
  limit,
  excluded,
}: {
  category: string;
  id: string;
  limit: number;
  excluded: number[];
}): Promise<any[]> {
  let realLimit = limit;

  const card = await getCartById(id);

  if (card) {
    realLimit -= 1;
  }

  const cardsByCategory = await getCartsByCategory({
    category,
    limit: realLimit,
    excluded,
  });

  const result = card ? [card, ...cardsByCategory] : cardsByCategory;

  return result;
}

export async function getCartsByCategory({
  category,
  limit,
  excluded,
}: {
  category: string;
  limit: number;
  excluded: number[];
}): Promise<any[]> {
  const conditions: any[] = [];

  const whereCategory = sql`${cards.category} = ${category}`;
  const whereNotInExcluded = sql`${cards.id} NOT IN (${sql.join(
    excluded.map((id) => sql`${id}`),
    sql`, `,
  )})`;

  conditions.push(whereCategory);
  if (excluded.length > 0) {
    conditions.push(whereNotInExcluded);
  }

  const whereClause = sql`${sql.join(conditions, sql` AND `)}`;

  try {
    console.log({ category });
    return db
      .select()
      .from(cards)
      .where(whereClause)
      .limit(limit)
      .orderBy(sql`RANDOM()`);
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

export async function addCardList(cardList: Card[]) {
  try {
    await db.insert(cards).values([...cardList]);
  } catch (e) {
    throw new Error("Error adding the card list");
  }
}

export async function addCard(card: Card) {
  try {
    await db.insert(cards).values(card);
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
