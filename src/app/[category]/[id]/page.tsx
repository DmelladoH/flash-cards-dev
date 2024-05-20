"use client";

import { useDeck } from "~/hooks/useDeck";

function Page({ params }: { params: { category: string; id: string } }) {
  const { category, id } = params;
  console.log({ category, id });
  const { currentCard } = useDeck({ category });
  console.log(currentCard);

  if (currentCard == null) return <p>error.</p>;
  return (
    <>
      <h1>CARDDD</h1>
      <article>
        <h2>{currentCard.question}</h2>
      </article>
    </>
  );
}

export default Page;
