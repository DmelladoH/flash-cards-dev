import { ControlFooter } from "~/components/control-footer";
import Header from "~/components/header";
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
      <div className="flashcards-layout min-height-100vh">
        <Header category={category} />
        <main>{children}</main>
        <ControlFooter />
      </div>
    </DeckProvider>
  );
}
