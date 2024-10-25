import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="rounded-lg bg-white px-4 py-2 text-lg text-black"
      aria-disabled={pending}
    >
      Send
    </button>
  );
}
