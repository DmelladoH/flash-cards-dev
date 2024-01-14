import FlashCard from "@/components/FlashCard"
import { Card } from "../types"
import data from "@/services/mockData/cardsData.json"
import Link from "next/link"

function Page({ params }: { params: { id: string } }){
    const card: Card | undefined = data.find((card) => card.id === params.id)
    
    if(card == undefined){
        return <div>404</div>
    }
    
    return (
        <main className="flex bg-black min-h-screen flex-col items-center justify-between p-24">
            <FlashCard id={card.id} question={card.question} answer={card["sort-answer"]} />
        
            <footer className="text-white ">
                <Link href={`/${card.id}`}>Next</Link>
            </footer>
        </main>
    )
}

export default Page