import { NextRequest, NextResponse } from "next/server";
import { getCartsByCategory } from "~/server/queries";

export async function POST(req: NextRequest) {
  const url = new URL(req.url);
  const body = await req.json();
  const category = url.searchParams.get("cat");
  const { excluded, limit } = body;

  if (category == null) return;

  const cards = await getCartsByCategory({
    category,
    excluded: excluded?.length ? excluded : [],
    limit,
  });

  return NextResponse.json([...cards]);
}
