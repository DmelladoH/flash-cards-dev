import { CARD_DECISION_THRESHOLD } from "@/constants";
import { is } from "drizzle-orm";
import { startTransition } from "react";

interface startDragElements {
  isAnimating: boolean;
  setIsAnimating: (val: boolean) => void;
  e: MouseEvent | TouchEvent;
  action: () => void;
}

let foo: boolean = false;

export function startDrag({
  isAnimating,
  setIsAnimating,
  e,
  action,
}: startDragElements) {
  if (foo || e == null) return;

  foo = true;

  let pullDeltaX: number;
  const card = document.getElementById("flashcard");

  if (!card) {
    foo = false;
    return;
  }

  if (!card.closest("div")?.classList.contains("draggable")) {
    foo = false;
    return;
  }

  const backgroundCard = document
    .getElementById("backgroundCard")
    ?.closest("div");

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
      backgroundCard.style.transition = "transform 0.9s";
      deg >= 4 || deg <= -4
        ? (backgroundCard.style.transform = `rotate(0deg)`)
        : (backgroundCard.style.transform = `rotate(${deg}deg)`);
    }
  };

  const onEnd = (e: any) => {
    foo = false;

    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("touchmove", onMove);
    document.removeEventListener("mouseup", onEnd);
    document.removeEventListener("touchend", onEnd);

    const isCardDecision = Math.abs(pullDeltaX) > CARD_DECISION_THRESHOLD;

    if (isCardDecision && isAnimating) {
      setIsAnimating(false);
      card.style.transition = "transform 0.5s";
      card.style.transform = `translateX(${
        pullDeltaX > 0 ? 1000 : -1000
      }px) rotate(${pullDeltaX > 0 ? 90 : -90}deg)`;

      card.addEventListener(
        "transitionend",
        () => {
          requestAnimationFrame(() => {
            pullDeltaX = 0;
            const elemToRemove = card?.closest("div");
            if (elemToRemove) elemToRemove.remove();
            action();
          });
        },
        { once: true },
      );

      console.log("NEXT");
      // action();
      // startTransition(() => {
      //   action(); // React will prioritize this state update
      // });
    } else {
      card.style.transition = "transform 0.5s";
      card.style.transform = "translateX(0) rotate(0deg)";
      setIsAnimating(false);
      if (backgroundCard) {
        backgroundCard.style.transition = "transform 0.5s";
        backgroundCard.style.transform = `rotate(-4deg)`;
      }
    }
    card.addEventListener(
      "transitionend",
      () => {
        foo = false;
        pullDeltaX = 0;
      },
      { once: true },
    );
  };
  setIsAnimating(true);
  document.addEventListener("mousemove", onMove);
  document.addEventListener("touchmove", onMove, { passive: true });

  document.addEventListener("mouseup", onEnd);
  document.addEventListener("touchend", onEnd);
}

export function nextCardByAction(next: () => void) {
  const card = document.getElementById("flashcard");
  const bgCard = document.getElementById("backgroundCard")?.closest("div");
  if (!card) return;

  card.style.transition = "transform 1.2s";
  card.style.transform = `translateX(${2000}px) rotate(${90}deg)`;

  if (bgCard) {
    bgCard.style.transition = "transform 1.2s";
    bgCard.style.transform = `rotate(0deg)`;
  }

  setTimeout(() => {
    const elemToRemove = card?.closest("div");
    if (elemToRemove) elemToRemove.remove();
    next();
  }, 500);
}
