import { sum } from "../src/sum";

describe("when call sum(10, 10)", () => {
  it("should get 20", () => {
    expect(sum(10, 10)).toBe(20);
  });
});
