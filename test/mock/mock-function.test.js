import { calculate, calculateAndReturn } from "../../src/sum";

test("test calculate()", () => {
  const callback = jest.fn();

  calculate([10, 10, 10], callback);
  calculate([10, 10, 10, 10, 10], callback);

  console.info(callback.mock.calls);
  expect(callback.mock.calls.length).toBe(2);
  expect(callback.mock.calls[0][0]).toBe(30);
  expect(callback.mock.calls[1][0]).toBe(50);
});

test("test calculateAndReturn()", () => {
  const callback = jest.fn();
  callback.mockReturnValueOnce(30);
  callback.mockReturnValueOnce(50);

  expect(calculateAndReturn([10, 10, 10], callback)).toBe(40);
  expect(calculateAndReturn([10, 10, 10, 10, 10], callback)).toBe(60);

  console.info(callback.mock.calls);
  expect(callback.mock.calls.length).toBe(2);
  expect(callback.mock.calls[0][0]).toBe(30);
  expect(callback.mock.calls[1][0]).toBe(50);
  expect(callback.mock.results[0].value).toBe(30);
  expect(callback.mock.results[1].value).toBe(50);
});

test("test mock implementation", () => {
  const callback = jest.fn();
  callback.mockImplementation((total) => {
    return total * 10;
  });

  calculate([10, 10, 10], callback);
  calculate([10, 10, 10, 10, 10], callback);

  console.info(callback.mock.calls);
  expect(callback.mock.calls.length).toBe(2);
  expect(callback.mock.calls[0][0]).toBe(30);
  expect(callback.mock.calls[1][0]).toBe(50);
  expect(callback.mock.results[0].value).toBe(300);
  expect(callback.mock.results[1].value).toBe(500);
});
