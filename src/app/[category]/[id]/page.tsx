"use client";
import { useEffect, useState, use } from "react";
import Deck from "~/components/deck";
import Loader from "~/components/UI/loader";
import { errorHandle } from "~/helpers/errorHandle";
import { useDeckContext } from "~/hooks/useDeckContext";

function Page(props: { params: Promise<{ category: string; id: string }> }) {
  const params = use(props.params);
  const { category, id } = params;
  const [isLoadingCards, setIsLoadingCards] = useState(false);
  const { deck, getCards, isLoading } = useDeckContext();

  useEffect(() => {
    const getData = async () => {
      try {
        if (deck.length) return;
        setIsLoadingCards(true);
        await getCards({ category, currentCardId: id });
        setIsLoadingCards(false);
      } catch (error) {
        errorHandle(error);
      }
    };

    getData().catch((error) => errorHandle(error));
  }, []);

  if (isLoading || isLoadingCards) {
    return <Loader />;
  }

  return (
    <div className="relative h-full">
      <Deck />
    </div>
  );
}

export default Page;
