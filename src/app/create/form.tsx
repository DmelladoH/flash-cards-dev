"use client";
import Input from "~/components/UI/input";
import TextArea from "~/components/UI/textArea";
import { createCard } from "~/server/actions/createCard";
import { useActionState } from "react";
import SubmitButton from "~/components/UI/buttons/submitButton";
import { toast } from "sonner";
import { categories } from "~/lib/categories";
import { Select } from "~/components/UI/select";

const initialState = {
  message: "",
};

export default function Form() {
  const [state, formAction] = useActionState(createCard, initialState);
  const categoriesNames = categories.map(({ id, name }) => ({
    id,
    name,
  }));

  if (state.message !== "") {
    toast(state.message);
  }

  return (
    <form action={formAction} className="grid w-[600] gap-4 p-5">
      <Select name="category" label="category" options={categoriesNames} />
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
