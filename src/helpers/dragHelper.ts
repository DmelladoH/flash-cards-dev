import { CARD_DECISION_THRESHOLD } from "@/constants";

interface startDragElements {
  isAnimating: boolean;
  e: MouseEvent | TouchEvent;
  next: () => void;
}

export function startDrag({ isAnimating, e, next }: startDragElements) {
  if (isAnimating || e == null) return;

  let pullDeltaX: number;
  const card = (e.target as HTMLElement)?.closest("article");

  if (!card) return;
  if (!card.closest("div")?.classList.contains("draggable")) return;

  const backgroundCard = document
    .getElementsByClassName("first")
    .item(0) as HTMLElement;

  const startX =
    e instanceof MouseEvent
      ? (e as MouseEvent).pageX
      : (e as TouchEvent).touches[0]?.pageX;

  const onMove = (e: MouseEvent | TouchEvent) => {
    const currentPosition =
      e instanceof MouseEvent ? e.pageX : e.touches[0]?.pageX;

    if (currentPosition == null || startX == null) return;

    pullDeltaX = currentPosition - startX;

    if (pullDeltaX === 0) return;

    const deg = pullDeltaX / 10;

    card.style.transform = `translateX(${pullDeltaX}px) rotate(${deg}deg)`;

    if (backgroundCard) {
      backgroundCard?.classList.add("detransform1");
    }
  };

  const onEnd = (e: any) => {
    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("touchmove", onMove);

    document.removeEventListener("mouseup", onEnd);
    document.removeEventListener("touchend", onEnd);

    const isCardDecision = Math.abs(pullDeltaX) > CARD_DECISION_THRESHOLD;

    if (isCardDecision) {
      card.style.transition = "transform 0.5s";
      card.style.transform = `translateX(${
        pullDeltaX > 0 ? 1000 : -1000
      }px) rotate(${pullDeltaX > 0 ? 90 : -90}deg)`;

      card.addEventListener(
        "transitionend",
        () => {
          isAnimating = false;
          pullDeltaX = 0;
          next();
        },
        { once: true },
      );
    } else {
      card.style.transition = "transform 0.5s";
      card.style.transform = "translateX(0) rotate(0deg)";

      if (backgroundCard == null) return;

      backgroundCard.closest("div")?.classList.remove("detransform1");
      backgroundCard.style.transition = "transform 0.9s";
    }

    card.addEventListener(
      "transitionend",
      () => {
        isAnimating = false;
        pullDeltaX = 0;
      },
      { once: true },
    );
  };

  document.addEventListener("mousemove", onMove);
  document.addEventListener("touchmove", onMove, { passive: true });

  document.addEventListener("mouseup", onEnd);
  document.addEventListener("touchend", onEnd);
}
