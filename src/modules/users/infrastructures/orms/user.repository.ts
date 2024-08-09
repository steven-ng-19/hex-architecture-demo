import { IUserRepository } from '../../domains/repositories';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { UserEntity } from '../../domains/entities';
import { UserMapper } from '../mappers';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    private readonly _prismaService: PrismaService,
    private readonly _userMapper: UserMapper,
  ) {}
  async getListUsers(): Promise<UserEntity[] | []> {
    const mappedData = this._userMapper.findAll();

    const users = await this._prismaService.user.findMany(mappedData);

    return users;
  }
  async getUserById(id: string): Promise<UserEntity | null> {
    const mappedData = this._userMapper.findOneById(id);

    const user = await this._prismaService.user.findFirst(mappedData);

    return user;
  }

  async getUserByEmail(email: string): Promise<UserEntity | null> {
    const mappedData = this._userMapper.findOneByEmail(email);

    const user = await this._prismaService.user.findFirst(mappedData);

    return user;
  }
  async saveUser(
    user: Omit<UserEntity, 'posts'>,
  ): Promise<Partial<UserEntity>> {
    const mappedData = this._userMapper.create(user);

    const newUser = await this._prismaService.user.create(mappedData);

    return newUser;
  }
}
