import { User } from "./User";

export interface IUserRepository {
    findAllUsers(): Promise<User[]>;
}