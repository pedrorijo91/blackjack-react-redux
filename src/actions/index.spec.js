import * as actions from "./index";

describe("blackjack actions", () => {
  it("startGame should create START_GAME action", () => {
    expect(actions.startGame()).toEqual({
      type: "START_GAME"
    });
  });

  it("newRound should create NEW_ROUND action", () => {
    expect(actions.newRound()).toEqual({
      type: "NEW_ROUND"
    });
  });

  it("addPlayerCard should create ADD_PLAYER_CARD action", () => {
    expect(actions.addPlayerCard()).toEqual({
      type: "ADD_PLAYER_CARD"
    });
  });

  it("dealerTurn should create DEALER_TURN action", () => {
    expect(actions.dealerTurn()).toEqual({
      type: "DEALER_TURN"
    });
  });

  it("increaseBet should create INCREASE_BET action", () => {
    expect(actions.increaseBet(10)).toEqual({
      type: "INCREASE_BET",
      amount: 10
    });
  });

  it("decreaseBet should create DECREASE_BET action", () => {
    expect(actions.decreaseBet(20)).toEqual({
      type: "DECREASE_BET",
      amount: 20
    });
  });

  it("allIn should create ALL_IN action", () => {
    expect(actions.allIn()).toEqual({
      type: "ALL_IN"
    });
  });

  it("clearBet should create CLEAR_BET action", () => {
    expect(actions.clearBet()).toEqual({
      type: "CLEAR_BET"
    });
  });
});
