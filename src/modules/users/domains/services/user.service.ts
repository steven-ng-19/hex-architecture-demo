import { CreateUserDto } from '../../applications/dtos';
import { UserEntity } from '../entities';

export interface IUserService {
  getListUsers(): Promise<UserEntity[]>;
  getUserById(id: string): Promise<UserEntity>;
  saveUser(user: CreateUserDto): Promise<Partial<UserEntity>>;
}
