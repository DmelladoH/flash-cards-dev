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
        {children}
        {/* <Link href={`${cards[0].id}`}> Next Card </Link> */}
      </div>
    </DeckProvider>
  );
}
