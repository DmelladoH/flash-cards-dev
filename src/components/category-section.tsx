import JavaScriptSVG from "./svgs/javaScript";
import { WebPerformanceSVG } from "./svgs/webPerformanceSvg";
import CategoryCard from "./UI/category-card";

export function CategorySection() {
  return (
    <>
      <section className="absolute z-20 h-full w-[-webkit-fill-available] rounded-t-3xl border-2 bg-white p-12 text-stone-900 md:mx-24">
        <h2 className="text-center text-lg font-medium md:text-xl">
          Choose the category
        </h2>
        <ul className="gallery mt-8">
          <li>
            <CategoryCard
              svg={<JavaScriptSVG />}
              name="JavaScript"
              href="/JavaScript"
            />
          </li>
          <li>
            <CategoryCard
              svg={<WebPerformanceSVG />}
              name="Web performance"
              href="Performance"
            />
          </li>
        </ul>
      </section>
      <div className="absolute left-0 right-0 top-0 -z-10 h-[300px] -rotate-6 rounded-t-3xl rounded-br-[21.5rem] border-2 bg-white p-10 md:mx-24"></div>{" "}
    </>
  );
}
