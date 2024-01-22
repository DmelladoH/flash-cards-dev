import FlashCardSlider from "@/components/flashSlider";
import { getCardsByCategory } from "@/services/getCards";

function Page({ params }: { params: { category: string } }) {
  const { category } = params;

  const cards = getCardsByCategory(category);

  if (cards == undefined) {
    return <div>404</div>;
  }

  return <FlashCardSlider deck={cards} />;
}

export default Page;
