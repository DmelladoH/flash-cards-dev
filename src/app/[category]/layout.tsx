import { ControlFooter } from "~/components/control-footer";
import Header from "~/components/header";
import { DeckProvider } from "~/context/deck-context";

export default async function CategoryLayout(props: {
  children: React.ReactNode;
  params: Promise<{ category: string }>;
}) {
  const params = await props.params;

  const { category } = params;

  const { children } = props;

  return (
    <DeckProvider>
      <div className="flashcards-layout min-height-100vh">
        <Header category={category} />
        <main>
          <div className="mx-auto h-full max-w-[50rem] px-3 md:pt-5">
            {children}
          </div>
        </main>
        <ControlFooter />
      </div>
    </DeckProvider>
  );
}
