"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useDeckContext } from "~/hooks/useDeckContext";

function Page({ params }: { params: { category: string } }) {
  const { category } = params;

  const { deck, isLoading, fetchData } = useDeckContext();

  useEffect(() => {
    fetchData({ category });
  }, []);

  if (isLoading) {
    return <p>loading...</p>;
  }

  deck.length && redirect(`${category}/${deck[0]?.name}`);
}

export default Page;
