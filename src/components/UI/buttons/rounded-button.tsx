import { ButtonHTMLAttributes } from "react";

function RoundedButton({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="block rounded-full bg-white  p-4 shadow-[0_4px_0_#ffffff7a] hover:bg-[rgba(255,255,255,0.8)] active:translate-y-1 active:shadow-none"
      {...props}
    >
      {children}
    </button>
  );
}

export default RoundedButton;
