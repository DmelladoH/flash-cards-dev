"use client";
import data from "@/services/mockData/cardsData.json";
import Link from "next/link";
import { getRandomCard } from "@/utils/utils";
import Category from "@/components/UI/category";

export default function Home() {
  const card = getRandomCard(data);
  const categories = [{ name: "JavaScript", icon: "public/javascript.svg" }];

  return (
    <main>
      <h1>Hello word</h1>

      <ul>
        {categories.map((category: any) => (
          <li key={category.name}>
            <Category name={category.name} icon={category.icon} />
            {/* <Link href={`/${category}`}>{category}</Link> */}
          </li>
        ))}
      </ul>
    </main>
  );
}
