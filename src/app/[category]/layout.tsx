import { ControlFooter } from "~/components/control-footer";
import Header from "~/components/header";
import { DeckProvider } from "~/context/deck-context";

export default async function CategoryLayout(
  props: {
    children: React.ReactNode;
    params: Promise<{ category: string }>;
  }
) {
  const params = await props.params;

  const {
    category
  } = params;

  const {
    children
  } = props;

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
