test("strings.not", () => {
  const name = "Narendra Febriliansyah R";

  expect(name).not.toBe("Apple");
  expect(name).not.toMatch(/orange/);
});

test("numbers.not", () => {
  const value = 2 + 2;
  expect(value).not.toBeGreaterThan(10);
  expect(value).not.toBeGreaterThanOrEqual(9);
  expect(value).not.toBeLessThan(3);
  expect(value).not.toBeLessThanOrEqual(2.5);

  expect(value).not.toBe(5);
});
