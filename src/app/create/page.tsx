"use client";

import Input from "~/components/UI/input";
import TextArea from "~/components/UI/textArea";
import { useFormStatus } from "react-dom";
import { createCard } from "~/server/actions/createCard";
import { useActionState } from "react";

const initialState = {
  message: "",
};

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="mt-10 rounded-lg bg-white px-4 py-2 text-lg"
      aria-disabled={pending}
    >
      Send
    </button>
  );
};

export default function Page() {
  const [state, formAction] = useActionState(createCard, initialState);
  return (
    <div className="flex justify-center pt-20">
      <form
        action={formAction}
        className="grid w-[600] gap-4 p-5 text-neutral-800"
      >
        <Input
          name="category"
          label="category"
          placeholder="JavaScript, performance..."
        />

        <Input
          name="question"
          label="Question"
          placeholder="What is the DOM?"
        />

        <TextArea
          name="answer"
          label="Answer"
          placeholder="Is the Document Object Model."
        />
        <SubmitButton />
      </form>
    </div>
  );
}
