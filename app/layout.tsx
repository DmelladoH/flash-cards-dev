import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { GeistSans } from "geist/font/sans";

import Providers from "./providers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Flash cards dev",
  description: "Flash cards for dev, learn and practice",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} text-white bg-green-600 flex flex-col items-center mt-10`}
      >
        <Providers>
          <header>
            <Link href="/">
              <h1 className="text-4xl font-bold">Flash cards</h1>
            </Link>
          </header>
          <main className=" min-h-screen px-2 pt-24 md:px-24">{children}</main>
          <footer className="text-white text-center bg-zinc-800 w-full p-20">
            <p>Refresh your understanding</p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
