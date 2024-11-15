export function errorHandle(error: unknown) {
  if (error instanceof Error) {
    console.error({ error });
  } else {
    console.error({ error: new Error("An unknown error occurred") });
  }
}
