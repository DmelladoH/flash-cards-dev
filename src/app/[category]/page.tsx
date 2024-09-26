"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { Loader } from "~/components/svgs/loader";
import { useDeckContext } from "~/hooks/useDeckContext";

function Page({ params }: { params: { category: string } }) {
  const { category } = params;

  const { deck, isLoading, fetchData } = useDeckContext();

  useEffect(() => {
    fetchData({ category });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (deck.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-10">
        <span className="text-xl">This category doesn't exist</span>
        <Link
          href={"/"}
          className="border-bg-slate-50 text-bg-slate-50 rounded-lg border-2 border-solid p-2 text-center uppercase"
        >
          choose another category
        </Link>
      </div>
    );
  }

  deck.length && redirect(`${category}/${deck[0]?.name}`);
}

export default Page;
