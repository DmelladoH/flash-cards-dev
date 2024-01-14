'use client'
import FlashCard from "../components/FlashCard";
import data from "@/services/mockData/cardsData.json"
import { Card } from "./types";
import { useState } from "react";
import Link from "next/link";
import { get } from "http";
import { getRandomCard } from "@/utils/utils";

export default function Home() {
  
  const card = getRandomCard(data)

  return (
    <main className="flex bg-black min-h-screen flex-col items-center justify-between p-24">
     <h1>Hello word</h1>
     
     
     

     <footer className="text-white ">
      <Link href={`/${card.id}`}>init</Link>
     </footer>
      {/* <FlashCard question="1+1" answer="2" /> */}

    </main>
  );
}
