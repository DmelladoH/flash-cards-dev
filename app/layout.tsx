import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Providers from "./providers";

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
      <body className={GeistSans.className}>
        <Providers>
          <main className="flex text-white bg-green-600 min-h-screen flex-col items-center justify-between p-24">
            <header>
              <h1 className="text-4xl font-bold">Flash cards</h1>
            </header>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
