// import "server-only";
import { type CardWithId, type Card } from "~/types";
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
}): Promise<CardWithId[]> {
  let realLimit = limit;

  const card = await getCardById(id);

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
}): Promise<CardWithId[]> {
  const conditions = [];

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
    return db
      .select({
        id: cards.id,
        name: cards.name,
        question: cards.question,
        answer: cards.answer,
        category: cards.category,
      })
      .from(cards)
      .where(whereClause)
      .limit(limit)
      .orderBy(sql`RANDOM()`);
  } catch (e: unknown) {
    if (e instanceof Error) {
      throw new Error(`Error getting cards: ${e.message}`);
    } else {
      throw new Error("An unknown error occurred while getting cards.");
    }
  }
}

export async function getCardById(id: string): Promise<
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
      columns: {
        createdAt: false,
      },
      where: (model, { eq }) => eq(model.name, id),
    });

    return res;
  } catch (e: unknown) {
    if (e instanceof Error) {
      throw new Error(`Error getting card: ${e.message}`);
    } else {
      throw new Error("An unknown error occurred while getting the card.");
    }
  }
}

export async function addCardList(cardList: Card[]) {
  try {
    await db.insert(cards).values([...cardList]);
  } catch (e: unknown) {
    if (e instanceof Error) {
      throw new Error(`Error adding the card list: ${e.message}`);
    } else {
      throw new Error("An unknown error occurred while adding the card list.");
    }
  }
}

export async function addCard(card: Card) {
  try {
    await db.insert(cards).values(card);
  } catch (e: unknown) {
    if (e instanceof Error) {
      throw new Error(`Error adding the card: ${e.message}`);
    } else {
      throw new Error("An unknown error occurred while adding the card.");
    }
  }
}
export async function removeAllCards() {
  try {
    // eslint-disable-next-line drizzle/enforce-delete-with-where
    await db.delete(cards);
  } catch (e: unknown) {
    if (e instanceof Error) {
      throw new Error(`Error removing the card: ${e.message}`);
    } else {
      throw new Error("An unknown error occurred while removing the card.");
    }
  }
}
