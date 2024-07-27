import Link from "next/link";
import JavaScriptSVG from "./svgs/javaScript";
import { WebPerformanceSVG } from "./svgs/webPerformanceSvg";
import CategoryCard from "./UI/category-card";

export function CategorySection() {
  return (
    <section className="row-span-2 mx-8 rounded-t-3xl border-2 bg-white p-10 text-stone-900">
      <h2>Choose the category</h2>
      <ul>
        <li>
          <CategoryCard
            svg={<JavaScriptSVG />}
            name="JavaScript"
            href="/JavaScript"
          />
        </li>
      </ul>
    </section>
  );
}
