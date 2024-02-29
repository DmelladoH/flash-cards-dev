"use client";

import { getCardsByCategory } from "@/services/getCards";
import { redirect } from "next/navigation";
import useFlashCards from "../hooks/useFlashCards";

function Page({ params }: { params: { category: string } }) {
  const { category } = params;
  const { deck } = useFlashCards({ category });

  if (deck == undefined || deck.length === 0 || category == undefined) {
    return <div>404</div>;
  }

  redirect(`/${category}/${deck[0].id}`);
}

export default Page;
