"use server";

export async function checkPassword(
  prevState: {
    allowed: boolean;
    message: string;
  },
  formData: FormData,
) {
  const pass = formData.get("password")?.toString();

  if (!pass || pass.trim() == "")
    return { allowed: false, message: "Invalid password" };

  if (pass === process.env.CREATING_PASS) {
    return { allowed: true, message: "Correct password" };
  } else {
    return { allowed: false, message: "Invalid password " };
  }
}
