"use client";
import Input from "~/components/UI/input";
import TextArea from "~/components/UI/textArea";
import { createCard } from "~/server/actions/createCard";
import { useActionState } from "react";
import SubmitButton from "~/components/UI/buttons/submitButton";

const initialState = {
  message: "",
};

export default function Form() {
  const [state, formAction] = useActionState(createCard, initialState);

  return (
    <form action={formAction} className="grid w-[600] gap-4 p-5">
      <Input
        name="category"
        label="category"
        placeholder="JavaScript, performance..."
      />

      <Input name="question" label="Question" placeholder="What is the DOM?" />

      <TextArea
        name="answer"
        label="Answer"
        placeholder="Is the Document Object Model."
      />
      <SubmitButton />
    </form>
  );
}
