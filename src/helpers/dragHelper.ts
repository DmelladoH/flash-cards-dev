export function nextCardByAction(next: () => void) {
  const card = document.getElementById("flashcard");
  const bgCard = document.getElementById("backgroundCard")?.closest("div");

  console.log({ card });
  console.log({ bgCard });

  if (!card) return;

  card.style.transition = "transform 1.2s ease-out";
  card.style.transform = `translateX(${2000}px) rotate(${90}deg)`;

  if (bgCard) {
    bgCard.style.transition = "transform 1.2s";
    bgCard.style.transform = `rotate(0deg)`;
  }

  setTimeout(() => {
    const elemToRemove = card?.closest("div");
    if (elemToRemove) elemToRemove.remove();
    if (card) card.remove();
    next();
  }, 500);
}
