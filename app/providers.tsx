"use client";

import { FlashCardProvider } from "./context/flashCardsContext";

function Providers({ children }: { children: React.ReactNode }) {
  return <FlashCardProvider>{children}</FlashCardProvider>;
}

export default Providers;
