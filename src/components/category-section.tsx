import JavaScriptSVG from "./svgs/javaScript";
import CategoryCard from "./UI/category-card";

export function CategorySection() {
  return (
    <>
      <section className="absolute z-20 mx-2 h-full w-[-webkit-fill-available] rounded-t-3xl border-2 bg-white p-12 text-stone-900 md:mx-16">
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
        </ul>
      </section>
      <div className="transform-bg-card absolute left-0 right-0 top-0 -z-10 mx-1 h-[500px] rounded-t-3xl rounded-br-[21.5rem] border-2 bg-white p-10 md:mx-16"></div>{" "}
    </>
  );
}
