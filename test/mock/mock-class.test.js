import { UserRepository } from "../../src/user-repository";
import { UserService } from "../../src/user-service";

jest.mock("../../src/user-repository");

const repository = new UserRepository();
const service = new UserService(repository);

test("test mock class save", () => {
  const user = { id: 1, name: "User 1" };
  service.save(user);

  expect(repository.save).toHaveBeenCalled();
});

test("test mock class save", () => {
  repository.findById.mockImplementation((id) => {
    return { id: id, name: `User ${id}` };
  });

  expect(repository.save).toHaveBeenCalled();
  expect(service.findById(10)).toEqual({ id: 10, name: "User 10" });
});
