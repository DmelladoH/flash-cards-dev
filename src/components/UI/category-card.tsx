import Link from "next/link";

interface Props {
  svg: React.ReactNode;
  name: string;
  href: string;
}
export default function CategoryCard({ svg, name, href }: Props) {
  return (
    <Link href={href} className="featured p-2">
      <article className="grid transform justify-items-center gap-2 transition duration-300 ease-in-out hover:scale-105">
        <div className="h-20 w-20 md:h-24 md:w-24">{svg}</div>
        <span className="text text-center">{name}</span>
      </article>
    </Link>
  );
}
