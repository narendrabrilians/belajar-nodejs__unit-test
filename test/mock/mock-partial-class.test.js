import { UserRepository } from "../../src/user-repository";
import { UserService } from "../../src/user-service";

const userRepository = new UserRepository();
const userService = new UserService(userRepository);

test("test mock class findById", () => {
  const user = { id: 1, name: "User 1" };
  const findByIdMock = jest.spyOn(userRepository, "findById");
  findByIdMock.mockReturnValue(user);

  console.info(userService.findById(1));
  expect(userService.findById(1)).toBe(user);
});
