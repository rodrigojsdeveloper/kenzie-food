import { userRepository } from "../repositories/user.repository";
import { IUser } from "../interfaces/user.inteface";
import { User } from "../entities/user.entity";

class UsersService {
  async create(user: IUser): Promise<User> {
    const newUser = new User();
    newUser.name = user.name;
    newUser.email = user.email;
    newUser.password = user.password;

    userRepository.create(newUser);
    await userRepository.save(newUser);

    Reflect.deleteProperty(newUser, "password");

    return newUser;
  }
}

export { UsersService };
