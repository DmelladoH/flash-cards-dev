import Link from "next/link";
import CallToAction from "./UI/buttons/cta";

export function EmptyState({ category }: { category: string }) {
  return (
    <div className="grid justify-center">
      <div className="mt-32 grid w-60 justify-center gap-10 align-middle">
        <p className="text-center">Having fun?</p>
        <CallToAction actionType="link" href={`/${category}`}>
          Get more
        </CallToAction>
        <Link
          href={"/"}
          className="w-full rounded-lg border-2 border-solid border-white p-2 text-center font-paytone text-white shadow-[0_4px_0_#ffffff] hover:bg-[rgba(255,255,255,0.2)] active:translate-y-1 active:shadow-none"
        >
          Choose another category
        </Link>
      </div>
    </div>
  );
}
