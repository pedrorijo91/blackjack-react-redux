export const CARD_SUITS = ["DIAMONDS", "HEARTS", "CLUBS", "SPADES"];
export const CARD_RANKS = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

export const createCard = (rank, suit) => {
  return { rank, suit };
};
