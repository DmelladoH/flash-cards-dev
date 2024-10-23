"use server";

import { Card } from "~/types";
import { addCard } from "../queries";
import { revalidatePath } from "next/cache";

export async function createCard(
  prevState: {
    message: string;
  },
  formData: FormData,
) {
  const category = formData.get("category")?.toString();
  const question = formData.get("question")?.toString();
  const answer = formData.get("answer")?.toString();

  const name = question?.replace(" ", "-");

  if (!name || name?.trim() == "") return { message: `Fail to create Card` };
  if (!category || category.trim() == "")
    return { message: `Fail to create Card` };
  if (!question || question.trim() == "")
    return { message: `Fail to create Card` };
  if (!answer || answer.trim() == "") return { message: `Fail to create Card` };

  const card: Card = {
    name: name,
    question: question,
    answer: answer,
    category: category,
  };

  try {
    // await addCard(card);
    console.log({ card });
    revalidatePath("/create");
    return { message: `card added` };
  } catch (e) {
    return { message: `Fail to create Card` };
  }
}
