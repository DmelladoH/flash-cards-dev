"use client";
import { redirect } from "next/navigation";
import { useDeck } from "~/hooks/useDeck";

function Page({ params }: { params: { category: string } }) {
  const { category } = params;

  const { currentCard, size } = useDeck({ category });

  if (currentCard == undefined || size === 0 || category == undefined) {
    return <div>404</div>;
  }

  redirect(`${category}/${currentCard.name}`);
}

export default Page;
