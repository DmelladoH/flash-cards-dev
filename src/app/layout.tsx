import "~/styles/globals.css";

import { Inter } from "next/font/google";
import "@fontsource/paytone-one";
import { Toaster } from "~/components/UI/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "CardsFlash",
  description: "Flash cards for devs",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
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
      </body>
    </html>
  );
}
