import Image from "next/image";
import FlashCard from "./components/FlashCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FlashCard question="1+1" answer="2" />
    </main>
  );
}
