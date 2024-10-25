interface SelectProps extends React.HtmlHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: { id: string; name: string }[];
}
export function Select({ name, label, options, ...props }: SelectProps) {
  return (
    <label className="grid text-lg">
      {label}
      <select
        name={name}
        {...props}
        className="rounded-lg px-4 py-2 text-sm text-black"
      >
        {options.map(({ id, name }) => (
          <option value={id} key={id}>
            {name}
          </option>
        ))}
      </select>
    </label>
  );
}
