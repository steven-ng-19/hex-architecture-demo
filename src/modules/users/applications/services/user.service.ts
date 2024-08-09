import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { CreateUserDto } from '../dtos';
import { IUserService } from '../../domains/services/user.service';
import { USER_ERRORS } from 'src/contents/errors';
import { UserEntity } from '../../domains/entities';
import { UserRepository } from '../../infrastructures/orms/user.repository';

@Injectable()
export class UserService implements IUserService {
  constructor(private readonly _userRepository: UserRepository) {}
  getListUsers(): Promise<UserEntity[]> {
    return this._userRepository.getListUsers();
  }
  async getUserById(id: string): Promise<UserEntity> {
    const user = await this._userRepository.getUserById(id);

    if (!user) throw new NotFoundException(USER_ERRORS.USER_NOT_FOUND);

    return user;
  }
  async saveUser(user: CreateUserDto): Promise<Partial<UserEntity>> {
    const isUser = await this._userRepository.getUserByEmail(user.email);

    if (isUser) throw new ConflictException('User already exists');

    const data: UserEntity = {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    };

    const newUser = this._userRepository.saveUser(data);

    if (!newUser)
      throw new BadRequestException(USER_ERRORS.ERROR_WHEN_CREATE_USER);

    return newUser;
  }
}
