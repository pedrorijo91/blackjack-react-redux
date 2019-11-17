import {
  handScore,
  isStartGameEnabled,
  isHitEnabled,
  isStandEnabled,
  isNewRoundEnabled,
  gameResult,
  GAME_RESULT
} from "./Game";
import { CARD_SUITS, createCard } from "../cards/Card";
import { fail } from "assert";

describe("hand score", () => {
  it("should be 0 for empty hand", () => {
    expect(handScore([])).toEqual(0);
  });

  it("should be the value of the number in single card hand", () => {
    expect(handScore([createCard("10", CARD_SUITS.SPADES)])).toEqual(10);

    expect(handScore([createCard("2", CARD_SUITS.SPADES)])).toEqual(2);

    expect(handScore([createCard("7", CARD_SUITS.SPADES)])).toEqual(7);
  });

  it("should be the figure value in single card hand", () => {
    expect(handScore([createCard("Q", CARD_SUITS.SPADES)])).toEqual(10);

    expect(handScore([createCard("K", CARD_SUITS.SPADES)])).toEqual(10);

    expect(handScore([createCard("J", CARD_SUITS.SPADES)])).toEqual(10);
  });

  it("should be the sum of the card values", () => {
    expect(
      handScore([
        createCard("2", CARD_SUITS.SPADES),
        createCard("3", CARD_SUITS.SPADES),
        createCard("Q", CARD_SUITS.SPADES)
      ])
    ).toEqual(15);
  });

  it("should be using A as 11 if it doesn't bust hand", () => {
    expect(
      handScore([
        createCard("2", CARD_SUITS.SPADES),
        createCard("3", CARD_SUITS.SPADES),
        createCard("A", CARD_SUITS.SPADES)
      ])
    ).toEqual(16);
  });

  it("should be using A as 1 if it busts hand", () => {
    expect(
      handScore([
        createCard("10", CARD_SUITS.SPADES),
        createCard("3", CARD_SUITS.SPADES),
        createCard("A", CARD_SUITS.SPADES)
      ])
    ).toEqual(14);
  });

  it("should be using A with different values if needed", () => {
    expect(
      handScore([
        createCard("2", CARD_SUITS.SPADES),
        createCard("A", CARD_SUITS.SPADES),
        createCard("A", CARD_SUITS.SPADES)
      ])
    ).toEqual(14);
  });
});

describe("isStartGameEnabled", () => {
  it("should be false if game has not started and no bet yet", () => {
    const state = {
      playerHand: [],
      dealerHand: [],
      deck: [],
      playerFinished: false,
      bet: 0,
      wallet: 1000
    };

    expect(isStartGameEnabled(state)).toEqual(false);
  });

  it("should be true if game has not started and bet is made", () => {
    const state = {
      playerHand: [],
      dealerHand: [],
      deck: [],
      playerFinished: false,
      bet: 100,
      wallet: 1000
    };

    expect(isStartGameEnabled(state)).toEqual(true);
  });

  it("should be false if game has started already", () => {
    const state = {
      playerHand: [
        createCard("5", CARD_SUITS.DIAMONDS),
        createCard("6", CARD_SUITS.DIAMONDS)
      ],
      dealerHand: [
        createCard("7", CARD_SUITS.DIAMONDS),
        createCard("8", CARD_SUITS.DIAMONDS)
      ],
      deck: [],
      playerFinished: false,
      bet: 100,
      wallet: 1000
    };

    expect(isStartGameEnabled(state)).toEqual(false);
  });

  it("should be false if game over", () => {
    const state = {
      playerHand: [
        createCard("2", CARD_SUITS.DIAMONDS),
        createCard("3", CARD_SUITS.DIAMONDS),
        createCard("4", CARD_SUITS.DIAMONDS)
      ],
      dealerHand: [
        createCard("5", CARD_SUITS.DIAMONDS),
        createCard("6", CARD_SUITS.DIAMONDS)
      ],
      deck: [],
      playerFinished: true,
      bet: 100,
      wallet: 1000
    };

    expect(isStartGameEnabled(state)).toEqual(false);
  });
});

describe("isHitEnabled", () => {
  it("should be false if game has not started and no bet yet", () => {
    const state = {
      playerHand: [],
      dealerHand: [],
      deck: [],
      playerFinished: false,
      bet: 0,
      wallet: 1000
    };

    expect(isHitEnabled(state)).toEqual(false);
  });

  it("should be false if game has not started and bet is made", () => {
    const state = {
      playerHand: [],
      dealerHand: [],
      deck: [],
      playerFinished: false,
      bet: 100,
      wallet: 1000
    };

    expect(isHitEnabled(state)).toEqual(false);
  });

  it("should be true if game has started already", () => {
    const state = {
      playerHand: [
        createCard("5", CARD_SUITS.DIAMONDS),
        createCard("6", CARD_SUITS.DIAMONDS)
      ],
      dealerHand: [
        createCard("7", CARD_SUITS.DIAMONDS),
        createCard("8", CARD_SUITS.DIAMONDS)
      ],
      deck: [],
      playerFinished: false,
      bet: 100,
      wallet: 1000
    };

    expect(isHitEnabled(state)).toEqual(true);
  });

  it("should be false if game over", () => {
    const state = {
      playerHand: [
        createCard("2", CARD_SUITS.DIAMONDS),
        createCard("3", CARD_SUITS.DIAMONDS),
        createCard("4", CARD_SUITS.DIAMONDS)
      ],
      dealerHand: [
        createCard("5", CARD_SUITS.DIAMONDS),
        createCard("6", CARD_SUITS.DIAMONDS)
      ],
      deck: [],
      playerFinished: true,
      bet: 100,
      wallet: 1000
    };

    expect(isHitEnabled(state)).toEqual(false);
  });
});

describe("isStandEnabled", () => {
  it("should be false if game has not started and no bet yet", () => {
    const state = {
      playerHand: [],
      dealerHand: [],
      deck: [],
      playerFinished: false,
      bet: 0,
      wallet: 1000
    };

    expect(isStandEnabled(state)).toEqual(false);
  });

  it("should be false if game has not started and bet is made", () => {
    const state = {
      playerHand: [],
      dealerHand: [],
      deck: [],
      playerFinished: false,
      bet: 100,
      wallet: 1000
    };

    expect(isStandEnabled(state)).toEqual(false);
  });

  it("should be true if game has started already", () => {
    const state = {
      playerHand: [
        createCard("5", CARD_SUITS.DIAMONDS),
        createCard("6", CARD_SUITS.DIAMONDS)
      ],
      dealerHand: [
        createCard("7", CARD_SUITS.DIAMONDS),
        createCard("8", CARD_SUITS.DIAMONDS)
      ],
      deck: [],
      playerFinished: false,
      bet: 100,
      wallet: 1000
    };

    expect(isStandEnabled(state)).toEqual(true);
  });

  it("should be false if user has clicked stand before", () => {
    const state = {
      playerHand: [
        createCard("5", CARD_SUITS.DIAMONDS),
        createCard("6", CARD_SUITS.DIAMONDS)
      ],
      dealerHand: [
        createCard("7", CARD_SUITS.DIAMONDS),
        createCard("8", CARD_SUITS.DIAMONDS)
      ],
      deck: [],
      playerFinished: true,
      bet: 100,
      wallet: 1000
    };

    expect(isStandEnabled(state)).toEqual(false);
  });

  it("should be false if game over", () => {
    const state = {
      playerHand: [
        createCard("2", CARD_SUITS.DIAMONDS),
        createCard("3", CARD_SUITS.DIAMONDS),
        createCard("4", CARD_SUITS.DIAMONDS)
      ],
      dealerHand: [
        createCard("5", CARD_SUITS.DIAMONDS),
        createCard("6", CARD_SUITS.DIAMONDS)
      ],
      deck: [],
      playerFinished: true,
      bet: 100,
      wallet: 1000
    };

    expect(isStandEnabled(state)).toEqual(false);
  });
});

describe("isNewRoundEnabled", () => {
  it("should be false if game has not started and no bet yet", () => {
    const state = {
      playerHand: [],
      dealerHand: [],
      deck: [],
      playerFinished: false,
      bet: 0,
      wallet: 1000
    };

    expect(isNewRoundEnabled(state)).toEqual(false);
  });

  it("should be false if game has not started and bet is made", () => {
    const state = {
      playerHand: [],
      dealerHand: [],
      deck: [],
      playerFinished: false,
      bet: 100,
      wallet: 1000
    };

    expect(isNewRoundEnabled(state)).toEqual(false);
  });

  it("should be false if game has started already", () => {
    const state = {
      playerHand: [
        createCard("5", CARD_SUITS.DIAMONDS),
        createCard("6", CARD_SUITS.DIAMONDS)
      ],
      dealerHand: [
        createCard("7", CARD_SUITS.DIAMONDS),
        createCard("8", CARD_SUITS.DIAMONDS)
      ],
      deck: [],
      playerFinished: false,
      bet: 100,
      wallet: 1000
    };

    expect(isNewRoundEnabled(state)).toEqual(false);
  });

  it("should be true if game over and money in wallet", () => {
    const state = {
      playerHand: [
        createCard("2", CARD_SUITS.DIAMONDS),
        createCard("3", CARD_SUITS.DIAMONDS),
        createCard("4", CARD_SUITS.DIAMONDS)
      ],
      dealerHand: [
        createCard("5", CARD_SUITS.DIAMONDS),
        createCard("6", CARD_SUITS.DIAMONDS)
      ],
      deck: [],
      playerFinished: true,
      bet: 100,
      wallet: 1000
    };

    expect(isNewRoundEnabled(state)).toEqual(true);
  });

  it("should be true if game over and no money in wallet", () => {
    const state = {
      playerHand: [
        createCard("2", CARD_SUITS.DIAMONDS),
        createCard("3", CARD_SUITS.DIAMONDS),
        createCard("4", CARD_SUITS.DIAMONDS)
      ],
      dealerHand: [
        createCard("5", CARD_SUITS.DIAMONDS),
        createCard("6", CARD_SUITS.DIAMONDS)
      ],
      deck: [],
      playerFinished: true,
      bet: 100,
      wallet: 0
    };

    expect(isNewRoundEnabled(state)).toEqual(true);
  });
});

describe("game result", () => {
  it("should return DEALER if player busted", () => {
    const state = {
      playerHand: [
        createCard("10", "DIAMONDS"),
        createCard("10", "DIAMONDS"),
        createCard("10", "DIAMONDS")
      ],
      dealerHand: [createCard("2", "DIAMONDS"), createCard("2", "DIAMONDS")],
      deck: [],
      playerFinished: false,
      bet: 0,
      wallet: 1000
    };

    expect(gameResult(state)).toEqual(GAME_RESULT.DEALER);
  });

  it("should return UNFINISHED if player not busted and did not stand", () => {
    const state = {
      playerHand: [createCard("10", "DIAMONDS"), createCard("10", "DIAMONDS")],
      dealerHand: [createCard("2", "DIAMONDS"), createCard("2", "DIAMONDS")],
      deck: [],
      playerFinished: false,
      bet: 0,
      wallet: 1000
    };

    expect(gameResult(state)).toEqual(GAME_RESULT.UNFINISHED);
  });

  it("should return TIE if player not busted, has STAND, and same score than dealer", () => {
    const state = {
      playerHand: [createCard("10", "DIAMONDS"), createCard("10", "DIAMONDS")],
      dealerHand: [createCard("Q", "DIAMONDS"), createCard("J", "DIAMONDS")],
      deck: [],
      playerFinished: true,
      bet: 0,
      wallet: 1000
    };

    expect(gameResult(state)).toEqual(GAME_RESULT.TIE);
  });

  it("should return PLAYER if player not busted, has STAND, and bigger score than dealer", () => {
    const state = {
      playerHand: [createCard("10", "DIAMONDS"), createCard("10", "DIAMONDS")],
      dealerHand: [createCard("2", "DIAMONDS"), createCard("2", "DIAMONDS")],
      deck: [],
      playerFinished: true,
      bet: 0,
      wallet: 1000
    };

    expect(gameResult(state)).toEqual(GAME_RESULT.PLAYER);
  });

  it("should return DEALER if player not busted, has STAND, and smaller score than dealer", () => {
    const state = {
      playerHand: [createCard("2", "DIAMONDS"), createCard("10", "DIAMONDS")],
      dealerHand: [createCard("10", "DIAMONDS"), createCard("10", "DIAMONDS")],
      deck: [],
      playerFinished: true,
      bet: 0,
      wallet: 1000
    };

    expect(gameResult(state)).toEqual(GAME_RESULT.DEALER);
  });
});
