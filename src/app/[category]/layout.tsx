import Link from "next/link";
import { DeckProvider } from "~/context/deck-context";

export default function CategoryLayout({
  children,
  params: { category },
}: {
  children: React.ReactNode;
  params: { category: string };
}) {
  return (
    <DeckProvider>
      <div>
        <header className="flex gap-7">
          <Link href={"/"}>back</Link>
          <h1 className="text-xl">{category}</h1>
        </header>
        <main className="flex items-center justify-center">{children}</main>
      </div>
    </DeckProvider>
  );
}
