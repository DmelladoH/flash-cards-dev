"use client";
import { redirect } from "next/navigation";
import { useDeck } from "~/hooks/useDeck";

function Page({ params }: { params: { category: string } }) {
  const { category } = params;

  const { currentCard, error, isLoading } = useDeck({ category });

  if (error != null) {
    return <div>404: card wasn't found </div>;
  }

  if (isLoading) {
    return <p>loading...</p>;
  }

  redirect(`${category}/${currentCard?.name}`);
}

export default Page;
