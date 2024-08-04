import Link from "next/link";

interface Props {
  svg: React.ReactNode;
  name: string;
  href: string;
}
export default function CategoryCard({ svg, name, href }: Props) {
  return (
    <Link href={href} className="featured max-w-[100px]">
      <article className="grid justify-center transition duration-300 ease-in-out hover:scale-110">
        {svg}
        <span className="text text-center">{name}</span>
      </article>
    </Link>
  );
}
