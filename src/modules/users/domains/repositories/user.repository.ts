import { UserEntity } from '../entities';

export interface IUserRepository {
  getListUsers(): Promise<UserEntity[] | []>;
  getUserById(id: string): Promise<UserEntity | null>;
  getUserByEmail(email: string): Promise<UserEntity | null>;
  saveUser(user: UserEntity): Promise<Partial<UserEntity>>;
}
