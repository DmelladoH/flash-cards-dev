import { NextRequest, NextResponse } from "next/server";
import { getCartsByCategory } from "~/server/queries";
import { shuffle } from "~/util/randomizer";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const category = url.searchParams.get("cat");

  if (category == null) return;

  const cards = await getCartsByCategory(category);
  console.log({ cards });
  const randomCards = shuffle(cards);

  console.log({ randomCards });

  return NextResponse.json([...randomCards]);
}
