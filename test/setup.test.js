import { sum } from "../src/sum";

beforeEach(() => {
  console.info("Before Each!");
});
afterEach(() => {
  console.info("After Each!");
});
beforeAll(() => {
  console.info("Before All!");
});
afterAll(() => {
  console.info("After All!");
});

test("first", () => {
  expect(sum(5, 5)).toBe(10);
});

test("second", () => {
  expect(sum(20, 20)).toBe(40);
});
