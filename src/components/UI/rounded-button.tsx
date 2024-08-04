import { ButtonHTMLAttributes } from "react";

function RoundedButton({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="transition duration-300 ease-in-out hover:scale-110"
      {...props}
    >
      <div className="block rounded-full bg-white p-4">{children}</div>
    </button>
  );
}

export default RoundedButton;
