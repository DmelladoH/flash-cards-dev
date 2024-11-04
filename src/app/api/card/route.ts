import { NextRequest, NextResponse } from "next/server";
import { getCartsWithIdAndCategory } from "~/server/queries";

export async function POST(req: NextRequest) {
  const url = new URL(req.url);
  const body = await req.json();
  const category = url.searchParams.get("cat");
  const id = url.searchParams.get("id");
  const { excluded, limit } = body;

  if (category == null || id == null) return;

  const cards = await getCartsWithIdAndCategory({
    id,
    category,
    excluded: excluded?.length ? excluded : [],
    limit,
  });

  return NextResponse.json([...cards]);
}