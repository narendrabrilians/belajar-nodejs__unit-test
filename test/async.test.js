import { sayHelloAsync } from "../src/async";

test("test async function", async () => {
  const sayHi = await sayHelloAsync("NFR");

  expect(sayHi).toBe("Hello NFR");
  await expect(sayHelloAsync("NFR")).resolves.toBe("Hello NFR");
  await expect(sayHelloAsync()).rejects.toBe("Name is empty!");
});
