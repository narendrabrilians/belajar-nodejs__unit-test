const sayNFR = (nfr) => {
  if (nfr === "NFR") {
    return nfr;
  } else {
    throw new Error("it is not NFR!");
  }
};

test.failing("test failing 1", () => {
  expect(sayNFR("NFR")).toBe("Hello!");
});

test.failing("test failing 2", () => {
  sayNFR("Cat");
});
