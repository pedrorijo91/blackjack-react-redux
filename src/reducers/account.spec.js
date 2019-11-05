import account from "./account";

describe("account reducer", () => {
  it("should handle initial state", () => {
    expect(account(undefined, {})).toEqual({
      bet: 0,
      wallet: 1000
    });
  });

  it("should handle INCREASE_BET", () => {
    expect(
      account(
        {
          bet: 0,
          wallet: 1000
        },
        {
          type: "INCREASE_BET",
          amount: 10
        }
      )
    ).toEqual({
      bet: 10,
      wallet: 990
    });
  });

  it("should handle DECREASE_BET", () => {
    expect(
      account(
        {
          bet: 20,
          wallet: 300
        },
        {
          type: "DECREASE_BET",
          amount: 10
        }
      )
    ).toEqual({
      bet: 10,
      wallet: 310
    });
  });

  it("should handle ALL_IN", () => {
    expect(
      account(
        {
          bet: 0,
          wallet: 1000
        },
        {
          type: "ALL_IN"
        }
      )
    ).toEqual({
      bet: 1000,
      wallet: 0
    });

    expect(
      account(
        {
          bet: 50,
          wallet: 100
        },
        {
          type: "ALL_IN"
        }
      )
    ).toEqual({
      bet: 150,
      wallet: 0
    });
  });

  it("should handle CLEAR_BET", () => {
    expect(
      account(
        {
          bet: 0,
          wallet: 1000
        },
        {
          type: "CLEAR_BET"
        }
      )
    ).toEqual({
      bet: 0,
      wallet: 1000
    });

    expect(
      account(
        {
          bet: 50,
          wallet: 40
        },
        {
          type: "CLEAR_BET"
        }
      )
    ).toEqual({
      bet: 0,
      wallet: 90
    });
  });
});
