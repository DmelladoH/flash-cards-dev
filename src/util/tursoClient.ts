import { Client, createClient } from "@libsql/client/http";

export function tursoClient(): Client {
  const url = process.env.TURSO_URL?.trim();
  if (url === undefined) {
    throw new Error("TURSO_URL is not defined");
  }

  const authToken = process.env.TURSO_AUTH?.trim();
  if (authToken === undefined) {
    if (!url.includes("file:")) {
      throw new Error("TURSO_URL is not defined");
    }
  }

  return createClient({
    url: process.env.TURSO_URL as string,
    authToken: process.env.TURSO_AUTH as string,
  });
}
