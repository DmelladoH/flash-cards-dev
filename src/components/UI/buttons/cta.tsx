import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  actionType: "button";
  children: React.ReactNode;
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  actionType: "link";
  href: string;
  children: React.ReactNode;
}

type Props = ButtonProps | LinkProps;

export default function CallToAction({
  actionType,
  children,
  ...props
}: Props) {
  const className =
    "border-spacing-y-px rounded-lg border-2 border-stone-900 bg-slate-50 p-2 text-center font-paytone text-stone-900 shadow-[0_4px_0_#292524] hover:bg-[#c3d9c5] active:translate-y-1 active:shadow-none";

  if (actionType === "button") {
    return (
      <button {...(props as ButtonProps)} className={className}>
        {children}
      </button>
    );
  } else {
    return (
      <Link href={(props as LinkProps).href} className={className}>
        {children}
      </Link>
    );
  }
}
