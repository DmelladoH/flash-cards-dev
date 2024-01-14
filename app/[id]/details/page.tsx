
import data from "@/services/mockData/cardsData.json"
import { Card } from "../../types"

function Page({ params }: { params: { id: string } }){
    console.log({params})
    const card: Card | undefined = data.find((card) => card.id === params.id)
    
    if(card == undefined || card?.["extended-content"] == undefined){
        return <div>404</div>
    }

    return (
        <main>
            <h1>{card.question}</h1>
             <section dangerouslySetInnerHTML={{__html: card["extended-content"]}}></section>
            <section>
                <h2>learn more about this subject</h2>
                <ul>
                    <li>link 1</li>
                    <li>link 2</li>
                    <li>link 3</li>
                </ul>
            </section>
        </main>
    )
}

export default Page