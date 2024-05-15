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
        <p>Layout --- {category} ----</p>
        {children}
        {/* <Link href={`${cards[0].id}`}> Next Card </Link> */}
      </div>
    </DeckProvider>
  );
}
