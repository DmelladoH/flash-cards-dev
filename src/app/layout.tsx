import "~/styles/globals.css";

import { Inter } from "next/font/google";
import "@fontsource/paytone-one";
import { Toaster } from "~/components/UI/sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { type Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const keywords = [
  "flashcards",
  "developers",
  "programming",
  "coding",
  "learning",
  "study app",
  "tech education",
  "CardsFlash",
  "software development",
  "coding skills",
  "React",
  "web performance",
];

export const metadata: Metadata = {
  title: "CardsFlash - Flashcards for Developers",
  description:
    "CardsFlash is a flashcard app designed to help developers and tech enthusiasts learn and retain programming knowledge efficiently. Improve your coding skills with customizable flashcards covering various programming languages, frameworks, and concepts.",
  keywords: keywords.join(", "),
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  authors: [{ name: "Daniel Mellado" }],
  generator: "next.js",
  creator: "Daniel Mellado",
  publisher: "Daniel Mellado",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL("https://www.cardsflash.dev/"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cardsflash.com",
    title: "CardsFlash - Flashcards for Developers",
    description:
      "Boost your coding skills with CardsFlash, a flashcard app for developers covering a range of programming languages and concepts.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CardsFlash - Flashcards for Developers",
    description:
      "Boost your coding skills with CardsFlash, a flashcard app for developers covering a range of programming languages and concepts.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`min-height-100vh font-sans ${inter.variable} overflow-x-hidden bg-green-600 text-stone-200`}
      >
        {children}
        <Toaster />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
