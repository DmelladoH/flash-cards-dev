import { NextRequest, NextResponse } from "next/server";
import { getCartsByCategory } from "~/server/queries";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const category = url.searchParams.get("cat");

  if (category == null) return;

  const cards = await getCartsByCategory(category);

  return NextResponse.json({ cards });
}
