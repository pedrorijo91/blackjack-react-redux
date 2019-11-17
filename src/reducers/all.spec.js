import { all, processDealerTurn } from "./all";
import { fail } from "assert";

const removeDup = cards => {
  return [...new Set(cards)];
};

describe("all reducer", () => {
  it("should handle initial state", () => {

    const dealerHand = [
      {
        rank: "8",
        suit: "DIAMONDS"
      },
      {
        rank: "10",
        suit: "DIAMONDS"
      }
    ];

    const playerHand = [
      {
        rank: "9",
        suit: "DIAMONDS"
      },
      {
        rank: "10",
        suit: "DIAMONDS"
      }
    ];

    const res = processDealerTurn(playerHand, dealerHand, [], 0, 1000);

    console.log(res);


  });
});


