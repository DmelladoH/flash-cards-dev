import Link from "next/link";
import { ControlFooter } from "~/components/control-footer";
import BackSvg from "~/components/svgs/backSvg";
import { DeckProvider } from "~/context/deck-context";
import { DragProvider } from "~/context/drag-context";

export default function CategoryLayout({
  children,
  params: { category, id },
}: {
  children: React.ReactNode;
  params: { category: string; id: string };
}) {
  return (
    <DeckProvider>
      <DragProvider>
        <div className="flashcards-layout">
          <header className="flex justify-center p-7 align-middle">
            <Link href={"/"} className="flex items-center">
              <BackSvg />
            </Link>
            <div className="">
              <h1 className="text-3xl">{category}</h1>
            </div>
          </header>
          <main className="flex items-start justify-center">{children}</main>
          <ControlFooter />
        </div>
      </DragProvider>
    </DeckProvider>
  );
}
