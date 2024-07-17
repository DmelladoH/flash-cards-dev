import Link from "next/link";

export function EmptyState({ category }: { category: string }) {
  return (
    <div className="mt-20 grid gap-10">
      <p>There are no more cards.</p>
      <Link
        href={`/${category}`}
        className="rounded-lg bg-slate-50 p-1 text-center uppercase text-black"
      >
        reset
      </Link>
    </div>
  );
}
