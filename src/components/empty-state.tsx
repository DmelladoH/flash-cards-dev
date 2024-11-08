import Link from "next/link";
import CallToAction from "./UI/buttons/cta";

export function EmptyState({ category }: { category: string }) {
  return (
    <div className="mt-20 grid justify-center gap-10 align-middle ">
      <p className="text-center">Having fun?</p>
      <CallToAction actionType="link" href={`/${category}`}>
        Get more
      </CallToAction>
      <Link
        href={"/"}
        className="border-bg-slate-50 text-bg-slate-50 rounded-lg border-2 border-solid p-2 text-center uppercase"
      >
        choose another category
      </Link>
    </div>
  );
}
