"use client";
import { redirect } from "next/navigation";
import { useEffect, use } from "react";
import CallToAction from "~/components/UI/buttons/cta";
import SecondaryAction from "~/components/UI/buttons/secondaryAction";
import Loader from "~/components/UI/loader";
import { useDeckContext } from "~/hooks/useDeckContext";
import { categories } from "~/lib/categories";

function Page(props: { params: Promise<{ category: string }> }) {
  const params = use(props.params);
  const { category } = params;
  const categoriesIds = categories.flatMap((cat) => cat.id);

  const { deck, isLoading, fetchData, setExcluded } = useDeckContext();

  const resetCategory = () => {
    setExcluded([]);
  };

  useEffect(() => {
    fetchData({ category });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (deck.length === 0 && !categoriesIds.includes(category)) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-10">
        <span className="text-xl">This category doesn't exist</span>
        <div className="max-w-98">
          <CallToAction actionType="link" href={"/"}>
            <span className="text-xl">Pick another category</span>
          </CallToAction>
        </div>
      </div>
    );
  }

  if (deck.length === 0 && categoriesIds.includes(category)) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-10">
        <span className="text-xl">
          Sorry, there are not new cards for this category left
        </span>
        <div className="max-w-98 grid gap-5">
          <CallToAction
            actionType="link"
            href={`/${category}`}
            onClick={resetCategory}
          >
            <span className="text-xl">Reset cards</span>
          </CallToAction>
          <SecondaryAction actionType="link" href={"/"}>
            <span className="text-xl">Choose another category</span>
          </SecondaryAction>
        </div>
      </div>
    );
  }

  deck.length && redirect(`${category}/${deck[0]?.name}`);
}

export default Page;
