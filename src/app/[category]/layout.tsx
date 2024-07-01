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
      <div className="grid h-screen p-0">
        <header className="grid p-2">
          <Link href={"/"}>back</Link>
          <div className="flex justify-center align-middle">
            <h1 className="text-2xl">{category}</h1>
          </div>
        </header>
        <main className="flex items-center justify-center">{children}</main>
      </div>
    </DeckProvider>
  );
}
