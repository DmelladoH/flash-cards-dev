export function nextCardByAction(
  action: () => void,
  position: number,
  rotate: number,
) {
  const card = document.getElementById("flashcard");
  const bgCard = document.getElementById("backgroundCard")?.closest("div");

  if (!card) return;

  card.style.transition = "transform 1.2s ease-out";
  card.style.transform = `translateX(${position}px) rotate(${rotate}deg)`;

  if (bgCard) {
    bgCard.style.transition = "transform 1.2s";
    bgCard.style.transform = `rotate(0deg)`;
  }

  setTimeout(() => {
    const elemToRemove = card?.closest("div");
    if (elemToRemove) elemToRemove.remove();
    if (card) card.remove();
    action();
  }, 500);
}
