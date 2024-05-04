import Link from "next/link";
import { getCartsByCategory } from "~/server/queries";

export default async function CategoryLayout({
  children,
  params: { category },
}: {
  params: { category: string };
  children: React.ReactNode;
}) {
  const cards = await getCartsByCategory(category);

  return (
    <div>
      <p>Layout --- {category} ----</p>
      {children}
      <Link href={`${cards[0].id}`}> Next Card </Link>
    </div>
  );
}
