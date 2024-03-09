"use client";

import { redirect } from "next/navigation";
import useFlashCards from "../../hooks/useFlashCards";

function Page({ params }: { params: { category: string } }) {
  const { category } = params;
  const { currentCard, size } = useFlashCards({ category });

  if (currentCard == undefined || size === 0 || category == undefined) {
    return <div>404</div>;
  }

  redirect(`/${category}/${currentCard.id}`);
}

export default Page;
