import { FlipSvg } from "./svgs/flipSvg";
import { NextSvg } from "./svgs/nextSvg";

interface ControlFooterProps {
  handleNextCard: () => void;
  handleFlip: () => void;
}

export function ControlFooter({
  handleNextCard,
  handleFlip,
}: ControlFooterProps) {
  return (
    <footer className="text-white mt-10 flex gap-9 justify-center">
      <button
        className="transition hover:scale-110 duration-300 ease-in-out"
        onClick={handleNextCard}
      >
        <div className="bg-white rounded-full block p-4">
          <NextSvg />
        </div>
      </button>
      <button
        onClick={handleFlip}
        className="transition hover:scale-110 duration-300 ease-in-out"
      >
        <div className="bg-white rounded-full block p-4">
          <FlipSvg />
        </div>
      </button>
    </footer>
  );
}
