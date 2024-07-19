"use client";
import { redirect } from "next/navigation";
import { useDeck } from "~/hooks/useDeck";

function Page({ params }: { params: { category: string } }) {
  const { category } = params;

  const { nextCard, error, isLoading } = useDeck({ category });

  if (error != null) {
    return <div>404: card wasn't found </div>;
  }

  if (isLoading) {
    return <p>loading...</p>;
  }

  nextCard && redirect(`${category}/${nextCard?.name}`);
}

export default Page;
