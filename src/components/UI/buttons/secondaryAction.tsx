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

export default function SecondaryAction({
  actionType,
  children,
  ...props
}: Props) {
  const className =
    "w-full rounded-lg border-2 border-solid border-white p-2 text-center font-paytone text-white shadow-[0_4px_0_#ffffff] hover:bg-[rgba(255,255,255,0.2)] active:translate-y-1 active:shadow-none";

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
