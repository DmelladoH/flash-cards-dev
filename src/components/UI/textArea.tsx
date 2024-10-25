interface TextAreaProps {
  label: string;
  name: string;
  placeholder: string;
}

export default function TextArea({ label, name, placeholder }: TextAreaProps) {
  return (
    <label className="grid text-lg">
      {label}
      <textarea
        name={name}
        placeholder={placeholder}
        className="min-h-60 rounded-lg px-4 py-2 text-sm text-black"
      />
    </label>
  );
}
