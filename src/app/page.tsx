import Link from "next/link";
import JavaScriptSVG from "~/components/svgs/javaScriptSvg";
import { WebPerformanceSVG } from "~/components/svgs/webPerformanceSvg";

export default async function HomePage() {
  return (
    <main className="grid h-screen grid-rows-3">
      <h1 className="text-4xl">FlashCards</h1>
      <section className="row-span-2 mx-8 rounded-t-3xl border-2 bg-white p-10 text-stone-900">
        <h2>Choose the category</h2>
        <ul>
          <li>
            <Link href="/JavaScript">
              <article className="rounded-md">
                <JavaScriptSVG />
              </article>
            </Link>
            <Link href="/WEB">
              <article>
                <WebPerformanceSVG />
              </article>
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
