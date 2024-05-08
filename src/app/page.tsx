import Link from "next/link";
import JavaScriptSVG from "~/resources/javaScriptSvg";
import { getCartsByCategory, getCategories } from "~/server/queries";

export default async function HomePage() {
  const categories = await getCategories();
  const res = await getCartsByCategory("JavaScript");
  console.log({ res });
  console.log({ categories });
  return (
    <main className="grid items-center justify-center">
      <h1 className="text-4xl">FlashCards</h1>
      <section className="mt-10">
        <h2>Choose the category</h2>
        <ul>
          <li>
            <Link href="/cards/JavaScript">
              <article className="rounded-md">
                <JavaScriptSVG />
              </article>
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
