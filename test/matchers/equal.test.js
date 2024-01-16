test("test toBe", () => {
  let name = "NFR";
  let hi = `Hello ${name}`;

  expect(hi).toBe("Hello NFR");
});

test("test toEquals", () => {
  let personId = { id: 1 };
  let person = { ...personId, name: "NFR" };

  expect(person).toEqual({ id: 1, name: "NFR" });
});
