import { Category } from "~/types";
import JavaScriptSVG from "./svgs/categories/javaScript";
import ReactSvg from "./svgs/categories/react";
import { WebPerformanceSVG } from "./svgs/categories/webPerformanceSvg";
import CategoryCard from "./UI/category-card";
import HtmlSVG from "./svgs/categories/html";

export function CategorySection() {
  const categories: Category[] = [
    { svg: JavaScriptSVG, name: "JavaScript", href: "/JavaScript" },
    { svg: WebPerformanceSVG, name: "Web performance", href: "/Performance" },
    { svg: ReactSvg, name: "React", href: "/React" },
    { svg: HtmlSVG, name: "HTML", href: "/Html" },
  ];

  return (
    <>
      <section className="scroll  absolute z-20 h-full w-[-webkit-fill-available] overflow-scroll rounded-t-3xl border-2 bg-white p-12 text-stone-900 md:mx-24">
        <h2 className="text-center text-lg font-medium md:text-xl">
          Choose the category
        </h2>
        <ul className="md:gallery gallerySmall mt-11">
          {categories.map(({ svg: SvgComponent, name, href }) => (
            <li key={name}>
              <CategoryCard svg={<SvgComponent />} name={name} href={href} />
            </li>
          ))}
        </ul>
      </section>
      <div className="absolute left-0 right-0 top-0 -z-10 h-[300px] -rotate-6 rounded-t-3xl rounded-br-[21.5rem] border-2 bg-white p-10 md:mx-24"></div>
    </>
  );
}
