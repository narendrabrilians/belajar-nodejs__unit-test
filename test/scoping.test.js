beforeAll(() => {
  console.info("beforeAll outer!");
});
afterAll(() => {
  console.info("afterAll outer!");
});
beforeEach(() => {
  console.info("beforeEach outer!");
});
afterEach(() => {
  console.info("afterEach outer!");
});

describe("Inner", () => {
  beforeAll(() => {
    console.info("beforeAll inner!");
  });
  afterAll(() => {
    console.info("afterAll inner!");
  });
  beforeEach(() => {
    console.info("beforeEach inner!");
  });
  afterEach(() => {
    console.info("afterEach inner!");
  });

  test("Test Inner", () => {
    console.info("Test Inner!");
  });
});

test("Test Outer", () => {
  console.info("Test Outer!");
});
