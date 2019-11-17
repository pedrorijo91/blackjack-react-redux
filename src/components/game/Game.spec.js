import { handScore } from "./Game";
import { CARD_SUITS } from "../cards/Card";

describe("hand score", () => {
  it("should be 0 for empty hand", () => {
    expect(handScore([])).toEqual(0);
  });

  it("should be the value of the number in single card hand", () => {
    expect(
      handScore([
        {
          suit: CARD_SUITS.SPADES,
          rank: "10"
        }
      ])
    ).toEqual(10);

    expect(
      handScore([
        {
          suit: CARD_SUITS.SPADES,
          rank: "2"
        }
      ])
    ).toEqual(2);

    expect(
      handScore([
        {
          suit: CARD_SUITS.SPADES,
          rank: "7"
        }
      ])
    ).toEqual(7);
  });

  it("should be the figure value in single card hand", () => {
    expect(
      handScore([
        {
          suit: CARD_SUITS.SPADES,
          rank: "Q"
        }
      ])
    ).toEqual(10);

    expect(
      handScore([
        {
          suit: CARD_SUITS.SPADES,
          rank: "K"
        }
      ])
    ).toEqual(10);

    expect(
      handScore([
        {
          suit: CARD_SUITS.SPADES,
          rank: "J"
        }
      ])
    ).toEqual(10);
  });

  it("should be the sum of the card values", () => {
    expect(
      handScore([
        {
          suit: CARD_SUITS.SPADES,
          rank: "2"
        },
        {
          suit: CARD_SUITS.SPADES,
          rank: "3"
        },
        {
          suit: CARD_SUITS.SPADES,
          rank: "Q"
        }
      ])
    ).toEqual(15);
  });

  it("should be using A as 11 if it doesn't bust hand", () => {
    expect(
      handScore([
        {
          suit: CARD_SUITS.SPADES,
          rank: "2"
        },
        {
          suit: CARD_SUITS.SPADES,
          rank: "3"
        },
        {
          suit: CARD_SUITS.SPADES,
          rank: "A"
        }
      ])
    ).toEqual(16);
  });

  it("should be using A as 1 if it busts hand", () => {
    expect(
      handScore([
        {
          suit: CARD_SUITS.SPADES,
          rank: "10"
        },
        {
          suit: CARD_SUITS.SPADES,
          rank: "3"
        },
        {
          suit: CARD_SUITS.SPADES,
          rank: "A"
        }
      ])
    ).toEqual(14);
  });

  it("should be using A with different values if needed", () => {
    expect(
      handScore([
        {
          suit: CARD_SUITS.SPADES,
          rank: "2"
        },
        {
          suit: CARD_SUITS.SPADES,
          rank: "A"
        },
        {
          suit: CARD_SUITS.SPADES,
          rank: "A"
        }
      ])
    ).toEqual(14);
  });
});

describe("isStartGameEnabled", () => {
  it("should...", () => {
    fail("missing impl");
  });
});

describe("isHitEnabled", () => {
  it("should...", () => {
    fail("missing impl");
  });
});

describe("isStandEnabled", () => {
  it("should...", () => {
    fail("missing impl");
  });
});

describe("game result", () => {
  it("should...", () => {
    fail("missing imp");
  });
});
