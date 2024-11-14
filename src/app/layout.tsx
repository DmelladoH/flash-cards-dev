import "~/styles/globals.css";

import { Inter } from "next/font/google";
import "@fontsource/paytone-one";
import { Toaster } from "~/components/UI/sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "CardsFlash - Flashcards for Developers",
  description:
    "CardsFlash is a flashcard app designed to help developers and tech enthusiasts learn and retain programming knowledge efficiently. Improve your coding skills with customizable flashcards covering various programming languages, frameworks, and concepts.",
  keywords:
    "flashcards, developers, programming, coding, learning, app, tech, study, education, CardsFlash, software development, coding skills, React, Performance, web",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  // openGraph: {
  //   title: "CardsFlash - Flashcards for Developers",
  //   description: "Boost your coding skills with CardsFlash, a flashcard app for developers covering a range of programming languages and concepts.",
  //   // images: [
  //   //   {
  //   //     url: "/images/cardsflash-og.png",
  //   //     width: 1200,
  //   //     height: 630,
  //   //     alt: "CardsFlash - Flashcards for Developers",
  //   //   },
  //   // ],
  // },
  twitter: {
    card: "summary_large_image",
    title: "CardsFlash - Flashcards for Developers",
    description:
      "Learn coding concepts efficiently with CardsFlash. Customizable flashcards for devs to strengthen programming knowledge.",
    // images: ["/images/cardsflash-og.png"],
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
