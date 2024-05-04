"use client";

import Link from "next/link";
import { DeckProvider } from "~/context/deck-context";

export default function CategoryLayout({
  children,
  params: { category },
}: {
  params: { category: string };
  children: React.ReactNode;
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
