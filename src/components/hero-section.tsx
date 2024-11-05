import LogoSvg from "./svgs/logo";

export function HeroSection() {
  return (
    <section className="">
      <div className="flex items-center justify-center">
        <LogoSvg className="sm:h-[150px] sm:w-[400px] md:h-[300px] md:w-[600px]" />
      </div>
    </section>
  );
}
