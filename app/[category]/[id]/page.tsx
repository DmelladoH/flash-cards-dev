import data from "@/services/mockData/cardsData.json";
import { Card } from "../../types";

function Page({ params }: { params: { id: string } }) {
  const card: Card | undefined = data.find((card) => card.id === params.id);

  console.log({ card });

  if (card == undefined || card?.["extended-content"] == undefined) {
    return <div>404</div>;
  }

  return (
    <section className="bg-white">
      <h1>{card.question}</h1>
      <div dangerouslySetInnerHTML={{ __html: card["extended-content"] }}></div>
      <section>
        <h2>learn more about this subject</h2>
        <ul>
          <li>link 1</li>
          <li>link 2</li>
          <li>link 3</li>
        </ul>
      </section>
    </section>
  );
}

export default Page;
