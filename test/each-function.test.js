import { sum } from "../src/sum";

const table = [
  [[10, 10], 20],
  [[20, 20], 40],
];
test.each(table)("sum these %s should result %i", (numbers, expected) => {
  expect(sum(numbers[0], numbers[1])).toBe(expected);
});

const tableObject = [
  { numbers: [10, 10], expected: 20 },
  { numbers: [20, 20], expected: 40 },
];
test.each(tableObject)(
  "test with object sum these $numbers should result $expected",
  ({ numbers, expected }) => {
    expect(sum(numbers[0], numbers[1])).toBe(expected);
  }
);
