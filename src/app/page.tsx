import { CategorySection } from "~/components/category-section";
import { HeroSection } from "~/components/hero-section";

export default async function HomePage() {
  return (
    <main className="flashcards-layout min-height-100vh">
      <HeroSection />
      <div className="relative">
        <CategorySection />
      </div>
    </main>
  );
}
