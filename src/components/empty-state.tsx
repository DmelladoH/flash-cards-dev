import Link from "next/link";

export function EmptyState({ category }: { category: string }) {
  return (
    <div className="mt-20 grid justify-center gap-10 align-middle">
      <p className="text-center">There are no more cards.</p>
      <Link
        href={`/${category}`}
        className="rounded-lg bg-slate-50 p-2 text-center uppercase text-black"
      >
        reset
      </Link>
      <Link
        href={"/"}
        className="border-bg-slate-50 text-bg-slate-50 rounded-lg border-2 border-solid p-2 text-center uppercase"
      >
        choose another category
      </Link>
    </div>
  );
}
