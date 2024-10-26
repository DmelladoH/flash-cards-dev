import LogoSvg from "./svgs/logo";

export function HeroSection() {
  return (
    <section className="md:py-20">
      <div className="flex h-56 items-center justify-center">
        <LogoSvg className="h-[200px] md:h-[300px]" />
      </div>
    </section>
  );
}
