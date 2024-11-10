import Link from "next/link";
import BackSvg from "./svgs/backSvg";

interface Props {
  category: string;
}
export default function Header({ category }: Props) {
  return (
    <header className="flex justify-between px-12 py-7 align-middle">
      <Link
        href={"/"}
        className="flex items-center"
        aria-label="go back to categories"
      >
        <BackSvg />
      </Link>
      <div className="">
        <h1 className="text-center font-paytone text-3xl text-white md:text-4xl">
          {category}
        </h1>
      </div>
      <div className=""></div>
    </header>
  );
}
