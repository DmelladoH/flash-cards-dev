import JavaScriptSVG from "./svgs/javaScript";
import CategoryCard from "./UI/category-card";

export function CategorySection() {
  return (
    <>
      <section className="absolute z-20 mx-8 h-full w-[-webkit-fill-available] rounded-t-3xl border-2 bg-white p-10 text-stone-900">
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
      <div className="transform-bg-card absolute left-0 right-0 top-0 -z-10 mx-7 h-[500px] rounded-t-3xl border-2 bg-white p-10"></div>{" "}
    </>
  );
}
