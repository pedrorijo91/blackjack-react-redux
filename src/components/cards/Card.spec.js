import { createCard } from "./Card";

describe("create card", () => {
  it("should create a valid card", () => {
    expect(createCard("3", "DIAMONDS")).toEqual({
      rank: "3",
      suit: "DIAMONDS"
    });
  });
});
