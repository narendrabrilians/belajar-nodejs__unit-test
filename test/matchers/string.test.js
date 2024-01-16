test("string", () => {
  const name = "Narendra Febriliansyah R";

  expect(name).toBe("Narendra Febriliansyah R");
  expect(name).toMatch(/rendra/);
});
