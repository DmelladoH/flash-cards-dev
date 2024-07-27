import Link from "next/link";

interface Props {
  svg: React.ReactNode;
  name: string;
  href: string;
}
export default function CategoryCard({ svg, name, href }: Props) {
  return (
    <Link href={href}>
      <article>
        {svg}
        <span>{name}</span>
      </article>
    </Link>
  );
}
