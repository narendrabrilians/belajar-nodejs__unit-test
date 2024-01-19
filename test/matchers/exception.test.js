class MyException extends Error {}

const throwErrorWithName = (name) => {
  if (name === "NFR") {
    throw new MyException("hahaha");
  } else {
    return "OK";
  }
};

test("exception", () => {
  expect(() => throwErrorWithName("NFR")).toThrow();
  expect(() => throwErrorWithName("NFR")).toThrow(MyException);
  expect(() => throwErrorWithName("NFR")).toThrow("hahaha");
  expect(throwErrorWithName(null)).toBe("OK");
});
