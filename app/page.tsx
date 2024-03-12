import Link from "next/link";
import Category from "@/components/UI/category";

export default function Home() {
  const categories = [{ name: "JavaScript", icon: "/javaScript.svg" }];

  return (
    <>
      <div>
        <h3 className="text-3xl">Choose a category</h3>
        <ul>
          {categories.map((category) => (
            <li key={category.name}>
              <Link href={`/${category.name}`}>
                <Category name={category.name} img={category.icon} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
