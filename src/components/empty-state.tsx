import Link from "next/link";
import CallToAction from "./UI/buttons/cta";

export function EmptyState({ category }: { category: string }) {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="w-80">
        <p className="text-center text-2xl">Having fun?</p>
        <div className="mt-10 grid gap-5">
          <CallToAction actionType="link" href={`/${category}`}>
            <span className="text-xl">Load more cards</span>
          </CallToAction>
          <Link
            href={"/"}
            className="w-full rounded-lg border-2 border-solid border-white p-2 text-center font-paytone text-white shadow-[0_4px_0_#ffffff] hover:bg-[rgba(255,255,255,0.2)] active:translate-y-1 active:shadow-none"
          >
            <span className="text-xl">Pick another category</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
