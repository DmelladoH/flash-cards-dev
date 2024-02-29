import Link from "next/link";
import Category from "@/components/UI/category";
import JavaScriptSVG from "@/components/svgs/javaScript";

export default function Home() {
  const categories = [{ name: "JavaScript", icon: "/public/javascript.svg" }];

  return (
    <>
      <div>
        <h3>Choose a category</h3>
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
      </div>
    </>
  );
}
