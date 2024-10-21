"use client";

import Input from "~/components/UI/input";
import TextArea from "~/components/UI/textArea";

export default function Page() {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!event.target) return null;

    const formData = {
      category: (
        event.currentTarget.elements.namedItem("category") as HTMLInputElement
      ).value,
      question: (
        event.currentTarget.elements.namedItem("question") as HTMLInputElement
      ).value,
      answer: (
        event.currentTarget.elements.namedItem("answer") as HTMLInputElement
      ).value,
    };

    if (formData["category"].trim() == "") return;
    if (formData["question"].trim() == "") return;
    if (formData["answer"].trim() == "") return;

    console.log({ formData });
  };

  return (
    <div className="mt-20 flex justify-center">
      <form
        onSubmit={onSubmit}
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

        <button
          type="submit"
          className="mt-10 rounded-lg bg-white px-4 py-2 text-lg"
        >
          Send
        </button>
      </form>
    </div>
  );
}
