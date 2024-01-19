import { getBalance } from "../../src/async";

test("mock async function", async () => {
  const from = jest.fn();
  from.mockResolvedValueOnce(1000);
  from.mockResolvedValueOnce(800);

  await expect(getBalance("Cat", from)).resolves.toEqual({
    name: "Cat",
    balance: 1000,
  });
  await expect(getBalance("Dog", from)).resolves.toEqual({
    name: "Dog",
    balance: 800,
  });
  expect(from.mock.calls.length).toBe(2);
  await expect(from.mock.results[0].value).resolves.toBe(1000);
  await expect(from.mock.results[1].value).resolves.toBe(800);
});

test.failing("mock async function", async () => {
  const from = jest.fn();
  from.mockRejectedValueOnce(new Error("Error!"));

  await getBalance("Cat", from);
});
