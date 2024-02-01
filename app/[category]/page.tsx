import FlashCardSlider from "@/components/flashSlider";
import { getCardsByCategory } from "@/services/getCards";
import { redirect } from "next/navigation";

function Page({ params }: { params: { category: string } }) {
  const { category } = params;

  const cards = getCardsByCategory(category);
  console.log(cards);
  if (cards == undefined || cards.length === 0 || category == undefined) {
    return <div>404</div>;
  }

  redirect(`/${category}/${cards[0].id}`);
}

export default Page;
