import game from "./game";

const removeDup = cards => {
  return [...new Set(cards)];
};

describe("game reducer", () => {
  it("should handle initial state", () => {
    const initialState = game(undefined, {});
    expect(initialState).toHaveProperty("playerHand", []);
    expect(initialState).toHaveProperty("dealerHand", []);
    expect(initialState).toHaveProperty("playerFinished", false);

    expect(initialState).toHaveProperty("deck");
    expect(removeDup(initialState.deck)).toHaveLength(52);
  });

  it("should handle START_GAME", () => {
    const state = game(
      {
        playerHand: [],
        dealerHand: [],
        playerFinished: false,
        deck: [
          {
            rank: "2",
            suit: "DIAMONDS"
          },
          {
            rank: "3",
            suit: "DIAMONDS"
          },
          {
            rank: "4",
            suit: "DIAMONDS"
          },
          {
            rank: "5",
            suit: "DIAMONDS"
          },
          {
            rank: "6",
            suit: "DIAMONDS"
          }
        ]
      },
      {
        type: "START_GAME"
      }
    );

    expect(state).toEqual({
      playerHand: [
        {
          rank: "2",
          suit: "DIAMONDS"
        },
        {
          rank: "3",
          suit: "DIAMONDS"
        }
      ],
      dealerHand: [
        {
          rank: "4",
          suit: "DIAMONDS"
        },
        {
          rank: "5",
          suit: "DIAMONDS"
        }
      ],
      playerFinished: false,
      deck: [
        {
          rank: "6",
          suit: "DIAMONDS"
        }
      ]
    });
  });

  it("should handle ADD_PLAYER_CARD", () => {
    const state = game(
      {
        playerHand: [
          {
            rank: "2",
            suit: "DIAMONDS"
          },
          {
            rank: "3",
            suit: "DIAMONDS"
          }
        ],
        dealerHand: [
          {
            rank: "4",
            suit: "DIAMONDS"
          },
          {
            rank: "5",
            suit: "DIAMONDS"
          }
        ],
        playerFinished: false,
        deck: [
          {
            rank: "6",
            suit: "DIAMONDS"
          },
          {
            rank: "7",
            suit: "DIAMONDS"
          }
        ]
      },
      {
        type: "ADD_PLAYER_CARD"
      }
    );

    expect(state).toEqual({
      playerHand: [
        {
          rank: "2",
          suit: "DIAMONDS"
        },
        {
          rank: "3",
          suit: "DIAMONDS"
        },
        {
          rank: "6",
          suit: "DIAMONDS"
        }
      ],
      dealerHand: [
        {
          rank: "4",
          suit: "DIAMONDS"
        },
        {
          rank: "5",
          suit: "DIAMONDS"
        }
      ],
      playerFinished: false,
      deck: [
        {
          rank: "7",
          suit: "DIAMONDS"
        }
      ]
    });
  });

  it("should handle DEALER_TURN", () => {
    fail('missing impl');
  });
});
