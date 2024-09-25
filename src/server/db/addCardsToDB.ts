import { removeAllCards, addCards } from "../queries.js";
import { data } from "../mockData/data.js";

async function updateCards() {
  try {
    await removeAllCards();
    await addCards(data);
    console.log("Cards added to DB");
  } catch (error) {
    console.error("Error updating cards:", error);
  }
}

updateCards();
