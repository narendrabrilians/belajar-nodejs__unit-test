test("array", () => {
  const name = ["Narendra", "Febriliansyah", "R"];
  expect(name).toContain("Narendra");
  expect(name).toEqual(["Narendra", "Febriliansyah", "R"]);

  const fruits = [{ name: "apple" }, { name: "orange" }];
  expect(fruits).toContainEqual({ name: "orange" });
  expect(fruits).toEqual([{ name: "apple" }, { name: "orange" }]);
});
