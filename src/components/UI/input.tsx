interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  placeholder?: string;
}
export default function Input({
  label,
  name,
  placeholder,
  ...props
}: InputProps) {
  return (
    <label className="grid text-lg">
      {label}
      <input
        name={name}
        placeholder={placeholder}
        className="rounded-lg px-4 py-2 text-sm text-black"
        {...props}
      />
    </label>
  );
}
