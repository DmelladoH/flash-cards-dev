import LogoSvg from "./svgs/logo";

export function HeroSection() {
  return (
    <section className="flex items-center justify-center py-10">
      <div className="flex items-center justify-center">
        <LogoSvg className="h-[150px] w-[400px] md:h-[300px] md:w-[600px]" />
      </div>
    </section>
  );
}
