import { getAllProduct, getProductById } from "../../src/database";
import { ProductService } from "../../src/product-service";

jest.mock("../../src/database", () => {
  const originalModule = jest.requireActual("../../src/database");

  return {
    __esModule: true,
    ...originalModule,
    getAllProduct: jest.fn(),
  };
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
