import { sayHelloAsync } from "../src/async";

test.concurrent("test 1", async () => console.info("test 1"));
test("test 2", async () => console.info("test 2"));
test.concurrent("test 3", async () => console.info("test 3"));
test("test 4", async () => console.info("test 4"));
test.concurrent("test 5", async () => console.info("test 5"));

test.concurrent("concurrent 1", async () => {
  await expect(sayHelloAsync("NFR")).resolves.toBe("Hello NFR");
});
test.concurrent("concurrent 2", async () => {
  await expect(sayHelloAsync("NFR")).resolves.toBe("Hello NFR");
});
test.concurrent("concurrent 3", async () => {
  await expect(sayHelloAsync("NFR")).resolves.toBe("Hello NFR");
});
