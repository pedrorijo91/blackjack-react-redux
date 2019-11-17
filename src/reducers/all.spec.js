import { all } from "./all";
import {createCard} from "../components/cards/Card";

const removeDup = cards => {
  return [...new Set(cards)];
};

describe("all reducer", () => {
  it("should handle initial state", () => {

    const initialState = all(undefined, {});
    expect(initialState).toHaveProperty("playerHand", []);
    expect(initialState).toHaveProperty("dealerHand", []);
    expect(initialState).toHaveProperty("playerFinished", false);
    expect(initialState).toHaveProperty("wallet", 1000);
    expect(initialState).toHaveProperty("bet", 0);

    expect(initialState).toHaveProperty("deck");
    expect(removeDup(initialState.deck)).toHaveLength(52);

  });

  it("should handle START_GAME", () => {
    const state = all(
      {
        bet: 300,
        wallet: 600,
        playerHand: [],
        dealerHand: [],
        playerFinished: false,
        deck: [
          createCard("2", "DIAMONDS"),
          createCard("3", "DIAMONDS"),
          createCard("4", "DIAMONDS"),
          createCard("5", "DIAMONDS"),
          createCard("6", "DIAMONDS")
        ]
      },
      {
        type: "START_GAME"
      }
    );

    expect(state).toEqual({
      bet: 300,
      wallet: 600,
      playerHand: [
        createCard("2", "DIAMONDS"),
        createCard("3", "DIAMONDS")
      ],
      dealerHand: [
        createCard("4", "DIAMONDS"),
        createCard("5", "DIAMONDS")
      ],
      playerFinished: false,
      deck: [
        createCard("6", "DIAMONDS")
      ]
    });
  });

  it("should handle ADD_PLAYER_CARD", () => {
    const state = all(
      {
        bet: 300,
        wallet: 600,
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
      bet: 300,
      wallet: 600,
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

  it("should handle DEALER_TURN, when dealer > player", () => {
    const state = all(
      {
        bet: 300,
        wallet: 600,
        playerHand: [
          createCard("2", "DIAMONDS"),
          createCard("3", "DIAMONDS")
        ],
        dealerHand: [
          createCard("4", "DIAMONDS"),
          createCard("5", "DIAMONDS")
        ],
        playerFinished: false,
        deck: [
          createCard("6", "DIAMONDS"),
          createCard("7", "DIAMONDS")
        ]
      },
      {
        type: "DEALER_TURN"
      }
    );

    expect(state).toEqual({
      bet: 0,
      wallet: 600,
      playerHand: [
        createCard("2", "DIAMONDS"),
        createCard("3", "DIAMONDS")
      ],
      dealerHand: [
        createCard("4", "DIAMONDS"),
        createCard("5", "DIAMONDS")
      ],
      playerFinished: true,
      deck: [
        createCard("6", "DIAMONDS"),
        createCard("7", "DIAMONDS")
      ]
    });
  });

  it("should handle DEALER_TURN, when dealer >= 17", () => {
    const state = all(
      {
        bet: 300,
        wallet: 600,
        playerHand: [
          createCard("10", "DIAMONDS"),
          createCard("9", "DIAMONDS")
        ],
        dealerHand: [
          createCard("10", "DIAMONDS"),
          createCard("7", "DIAMONDS")
        ],
        playerFinished: false,
        deck: [
          createCard("6", "DIAMONDS"),
          createCard("7", "DIAMONDS")
        ]
      },
      {
        type: "DEALER_TURN"
      }
    );

    expect(state).toEqual({
      bet: 0,
      wallet: 1200,
      playerHand: [
        createCard("10", "DIAMONDS"),
        createCard("9", "DIAMONDS")
      ],
      dealerHand: [
        createCard("10", "DIAMONDS"),
        createCard("7", "DIAMONDS")
      ],
      playerFinished: true,
      deck: [
        createCard("6", "DIAMONDS"),
        createCard("7", "DIAMONDS")
      ]
    });
  });

  it("should handle DEALER_TURN, when dealer < player by 1 card", () => {
    const state = all(
      {
        bet: 300,
        wallet: 600,
        playerHand: [
          createCard("10", "DIAMONDS"),
          createCard("8", "DIAMONDS")
        ],
        dealerHand: [
          createCard("10", "DIAMONDS"),
          createCard("4", "DIAMONDS")
        ],
        playerFinished: false,
        deck: [
          createCard("6", "DIAMONDS"),
          createCard("7", "DIAMONDS")
        ]
      },
      {
        type: "DEALER_TURN"
      }
    );

    expect(state).toEqual({
      bet: 0,
      wallet: 600,
      playerHand: [
        createCard("10", "DIAMONDS"),
        createCard("8", "DIAMONDS")
      ],
      dealerHand: [
        createCard("10", "DIAMONDS"),
        createCard("4", "DIAMONDS"),
        createCard("6", "DIAMONDS")
      ],
      playerFinished: true,
      deck: [
        createCard("7", "DIAMONDS")
      ]
    });
  });

  it("should handle DEALER_TURN, when dealer < player by 2 cards", () => {
    const state = all(
      {
        bet: 300,
        wallet: 600,
        playerHand: [
          createCard("10", "DIAMONDS"),
          createCard("8", "DIAMONDS")
        ],
        dealerHand: [
          createCard("2", "DIAMONDS"),
          createCard("4", "DIAMONDS")
        ],
        playerFinished: false,
        deck: [
          createCard("6", "DIAMONDS"),
          createCard("8", "DIAMONDS"),
          createCard("9", "DIAMONDS")
        ]
      },
      {
        type: "DEALER_TURN"
      }
    );

    expect(state).toEqual({
      bet: 0,
      wallet: 600,
      playerHand: [
        createCard("10", "DIAMONDS"),
        createCard("8", "DIAMONDS")
      ],
      dealerHand: [
        createCard("2", "DIAMONDS"),
        createCard("4", "DIAMONDS"),
        createCard("6", "DIAMONDS"),
        createCard("8", "DIAMONDS")
      ],
      playerFinished: true,
      deck: [
        createCard("9", "DIAMONDS")
      ]
    });
  });

  it("should handle DEALER_TURN, when dealer < player and hold on 17", () => {
    const state = all(
      {
        bet: 300,
        wallet: 600,
        playerHand: [
          createCard("10", "DIAMONDS"),
          createCard("9", "DIAMONDS")
        ],
        dealerHand: [
          createCard("2", "DIAMONDS"),
          createCard("5", "DIAMONDS")
        ],
        playerFinished: false,
        deck: [
          createCard("10", "DIAMONDS"),
          createCard("2", "DIAMONDS"),
          createCard("3", "DIAMONDS")
        ]
      },
      {
        type: "DEALER_TURN"
      }
    );

    expect(state).toEqual({
      bet: 0,
      wallet: 1200,
      playerHand: [
        createCard("10", "DIAMONDS"),
        createCard("9", "DIAMONDS")
      ],
      dealerHand: [
        createCard("2", "DIAMONDS"),
        createCard("5", "DIAMONDS"),
        createCard("10", "DIAMONDS")
      ],
      playerFinished: true,
      deck: [
        createCard("2", "DIAMONDS"),
        createCard("3", "DIAMONDS")
      ]
    });
  });


  it("should handle DEALER_TURN, when dealer < player and hold when bust", () => {
    const state = all(
      {
        bet: 300,
        wallet: 600,
        playerHand: [
          createCard("10", "DIAMONDS"),
          createCard("9", "DIAMONDS")
        ],
        dealerHand: [
          createCard("7", "DIAMONDS"),
          createCard("7", "SPADES")
        ],
        playerFinished: false,
        deck: [
          createCard("8", "DIAMONDS"),
          createCard("2", "DIAMONDS"),
          createCard("3", "DIAMONDS")
        ]
      },
      {
        type: "DEALER_TURN"
      }
    );

    expect(state).toEqual({
      bet: 0,
      wallet: 1200,
      playerHand: [
        createCard("10", "DIAMONDS"),
        createCard("9", "DIAMONDS")
      ],
      dealerHand: [
        createCard("7", "DIAMONDS"),
        createCard("7", "SPADES"),
        createCard("8", "DIAMONDS")
      ],
      playerFinished: true,
      deck: [
        createCard("2", "DIAMONDS"),
        createCard("3", "DIAMONDS")
      ]
    });
  });

  it("should handle DEALER_TURN, when dealer < player and hold when bust", () => {
    const state = all(
      {
        bet: 300,
        wallet: 600,
        playerHand: [
          createCard("10", "DIAMONDS"),
          createCard("9", "DIAMONDS")
        ],
        dealerHand: [
          createCard("7", "DIAMONDS"),
          createCard("7", "SPADES")
        ],
        playerFinished: false,
        deck: [
          createCard("5", "DIAMONDS"),
          createCard("2", "DIAMONDS"),
          createCard("3", "DIAMONDS")
        ]
      },
      {
        type: "DEALER_TURN"
      }
    );

    expect(state).toEqual({
      bet: 0,
      wallet: 900,
      playerHand: [
        createCard("10", "DIAMONDS"),
        createCard("9", "DIAMONDS")
      ],
      dealerHand: [
        createCard("7", "DIAMONDS"),
        createCard("7", "SPADES"),
        createCard("5", "DIAMONDS")
      ],
      playerFinished: true,
      deck: [
        createCard("2", "DIAMONDS"),
        createCard("3", "DIAMONDS")
      ]
    });
  });

  it("should handle INCREASE_BET", () => {
    expect(
      all(
        {
          bet: 0,
          wallet: 1000,
          playerHand: [],
          dealerHand: [],
          playerFinished: false,
          deck: [createCard("2", "DIAMONDS"), createCard("3", "DIAMONDS"), createCard("4", "DIAMONDS")]
        },
        {
          type: "INCREASE_BET",
          amount: 10
        }
      )
    ).toEqual({
      bet: 10,
      wallet: 990,
      playerHand: [],
      dealerHand: [],
      playerFinished: false,
      deck: [createCard("2", "DIAMONDS"), createCard("3", "DIAMONDS"), createCard("4", "DIAMONDS")]
    });
  });

  it("should handle DECREASE_BET", () => {
    expect(
      all(
        {
          bet: 20,
          wallet: 300,
          playerHand: [],
          dealerHand: [],
          playerFinished: false,
          deck: [createCard("2", "DIAMONDS"), createCard("3", "DIAMONDS"), createCard("4", "DIAMONDS")]
        },
        {
          type: "DECREASE_BET",
          amount: 10
        }
      )
    ).toEqual({
      bet: 10,
      wallet: 310,
      playerHand: [],
      dealerHand: [],
      playerFinished: false,
      deck: [createCard("2", "DIAMONDS"), createCard("3", "DIAMONDS"), createCard("4", "DIAMONDS")]
    });
  });

  it("should handle ALL_IN", () => {
    expect(
      all(
        {
          bet: 0,
          wallet: 1000,
          playerHand: [],
          dealerHand: [],
          playerFinished: false,
          deck: [createCard("2", "DIAMONDS"), createCard("3", "DIAMONDS"), createCard("4", "DIAMONDS")]
        },
        {
          type: "ALL_IN"
        }
      )
    ).toEqual({
      bet: 1000,
      wallet: 0,
      playerHand: [],
      dealerHand: [],
      playerFinished: false,
      deck: [createCard("2", "DIAMONDS"), createCard("3", "DIAMONDS"), createCard("4", "DIAMONDS")]
    });

    expect(
      all(
        {
          bet: 50,
          wallet: 100,
          playerHand: [],
          dealerHand: [],
          playerFinished: false,
          deck: [createCard("2", "DIAMONDS"), createCard("3", "DIAMONDS"), createCard("4", "DIAMONDS")]
        },
        {
          type: "ALL_IN"
        }
      )
    ).toEqual({
      bet: 150,
      wallet: 0,
      playerHand: [],
      dealerHand: [],
      playerFinished: false,
      deck: [createCard("2", "DIAMONDS"), createCard("3", "DIAMONDS"), createCard("4", "DIAMONDS")]
    });
  });

  it("should handle CLEAR_BET", () => {
    expect(
      all(
        {
          bet: 0,
          wallet: 1000,
          playerHand: [],
          dealerHand: [],
          playerFinished: false,
          deck: [createCard("2", "DIAMONDS"), createCard("3", "DIAMONDS"), createCard("4", "DIAMONDS")]
        },
        {
          type: "CLEAR_BET"
        }
      )
    ).toEqual({
      bet: 0,
      wallet: 1000,
      playerHand: [],
      dealerHand: [],
      playerFinished: false,
      deck: [createCard("2", "DIAMONDS"), createCard("3", "DIAMONDS"), createCard("4", "DIAMONDS")]
    });

    expect(
      all(
        {
          bet: 50,
          wallet: 40,
          playerHand: [],
          dealerHand: [],
          playerFinished: false,
          deck: [createCard("2", "DIAMONDS"), createCard("3", "DIAMONDS"), createCard("4", "DIAMONDS")]
        },
        {
          type: "CLEAR_BET"
        }
      )
    ).toEqual({
      bet: 0,
      wallet: 90,
      playerHand: [],
      dealerHand: [],
      playerFinished: false,
      deck: [createCard("2", "DIAMONDS"), createCard("3", "DIAMONDS"), createCard("4", "DIAMONDS")]
    });
  });
});


