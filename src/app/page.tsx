import { CategorySection } from "~/components/category-section";
import { HeroSection } from "~/components/hero-section";

export default async function HomePage() {
  return (
    <main className="grid h-screen grid-rows-3">
      <HeroSection />
      <div className="relative row-span-2">
        <CategorySection />
        {/* <div className="m-x-2 absolute bottom-0 z-30 h-60 w-full bg-slate-600"></div> */}
      </div>
    </main>
  );
}
