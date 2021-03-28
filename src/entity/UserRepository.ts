import { IUserRepository } from "./IUserRepository";
import { User } from "./User";

export class UserRepository  implements IUserRepository {   
    async findAllUsers(): Promise<User[]> {
        return User.findAll();
    }
}