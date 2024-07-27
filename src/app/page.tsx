import { CategorySection } from "~/components/category-section";
import { HeroSection } from "~/components/hero-section";

export default async function HomePage() {
  return (
    <main className="grid h-screen grid-rows-3">
      <HeroSection />
      <CategorySection />
    </main>
  );
}
