import { type CardWithId } from "~/types";

interface getRandomCardsProps {
  excluded: number[];
  category: string;
  limit?: number;
}
export async function getRandomCards({
  excluded,
  category,
  limit = 5,
}: getRandomCardsProps): Promise<CardWithId[]> {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ excluded, limit }),
  };

  try {
    const res = await fetch(`/api/cards?cat=${category}`, options);
    if (!res.ok) throw new Error("Network response was not ok");
    const json = (await res.json()) as CardWithId[];
    return json;
  } catch (error) {
    console.error("getRandomCards error:", error);
    throw error;
  }
}

interface getCardsByIdProps {
  excluded: number[];
  category: string;
  id: string;
  limit?: number;
}
export async function getCardsById({
  excluded,
  category,
  id,
  limit = 5,
}: getCardsByIdProps) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ excluded, limit }),
  };

  try {
    const res = await fetch(`/api/card?cat=${category}&id=${id}`, options);
    if (!res.ok) throw new Error("Network response was not ok");
    const json = (await res.json()) as CardWithId[];
    return json;
  } catch (error) {
    console.error("getRandomCards error:", error);
    throw error;
  }
}
