import { ControlFooter } from "~/components/control-footer";
import Header from "~/components/header";

export default async function CategoryLayout(props: {
  children: React.ReactNode;
  params: Promise<{ category: string }>;
}) {
  const params = await props.params;

  const { category } = params;

  const { children } = props;

  return (
    <div className="flashcards-layout min-height-100vh">
      <Header category={category} />
      <main>
        <div className="mx-auto h-full max-w-[50rem] px-3 md:pt-20">
          {children}
        </div>
      </main>
      <ControlFooter />
    </div>
  );
}
