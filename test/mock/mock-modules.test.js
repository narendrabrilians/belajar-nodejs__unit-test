import { getAllProduct, getProductById } from "../../src/database";
import { ProductService } from "../../src/product-service";

jest.mock("../../src/database.js");

test("mock modules getProductById", () => {
  getProductById.mockImplementation((id) => {
    return { id: id, name: "Product Mock" };
  });

  const productMock = ProductService.findById(1);
  console.info(`Product Mock ${productMock.id}`);
  expect(productMock).toEqual({ id: 1, name: "Product Mock" });
});

test("mock modules getAllProduct", () => {
  const products = [
    { id: 1, name: "Product Mock 1" },
    { id: 2, name: "Product Mock 2" },
  ];

  getAllProduct.mockReturnValue(products);

  const productsMock = ProductService.findAll();
  expect(productsMock).toEqual([
    { id: 1, name: "Product Mock 1" },
    { id: 2, name: "Product Mock 2" },
  ]);
});
