"use client";

const initialState = {
  allowed: false,
  message: "",
};

import { useActionState } from "react";
import Form from "./form";
import { checkPassword } from "~/server/actions/checkPassword";
import Input from "~/components/UI/input";
import SubmitButton from "~/components/UI/buttons/submitButton";

const LogForm = ({
  formAction,
}: {
  formAction: (payload: FormData) => void;
}) => {
  return (
    <form action={formAction} className="grid w-[600] gap-4 p-5">
      <Input name="password" label="Password" type="password" />
      <SubmitButton />
    </form>
  );
};

export default function Page() {
  const [state, formAction] = useActionState(checkPassword, initialState);

  return <>{state.allowed ? <Form /> : <LogForm formAction={formAction} />}</>;
}
