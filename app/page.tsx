"use client";
import data from "@/services/mockData/cardsData.json";
import Link from "next/link";
import { getRandomCard } from "@/utils/utils";
import Category from "@/components/UI/category";
import JavaScriptSVG from "@/components/svgs/javaScript";

export default function Home() {
  const card = getRandomCard(data);
  const categories = [{ name: "JavaScript", icon: "/public/javascript.svg" }];

  return (
    <main>
      <h1>Hello word</h1>

      <ul>
        {categories.map((category) => (
          <li key={category.name}>
            <Link href={`/${category.name}`}>
              <Category name={category.name}>
                <JavaScriptSVG />
              </Category>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
