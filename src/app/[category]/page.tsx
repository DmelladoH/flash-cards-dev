"use client";
import { redirect } from "next/navigation";
import { useDeck } from "~/hooks/useDeck";

function Page({ params }: { params: { category: string } }) {
  const { category } = params;

  const { currentCard, error, isLoading } = useDeck({ category });
  console.log({
    currentCard,
    isLoading,
    error,
  });
  if (error != null) {
    return <div>404</div>;
  }

  if (isLoading) {
    return <p>cargando...</p>;
  }

  redirect(`${category}/${currentCard?.name}`);
}

export default Page;
