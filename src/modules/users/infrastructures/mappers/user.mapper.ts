import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UserEntity } from '../../domains/entities';

@Injectable()
export class UserMapper {
  findAll(): Prisma.UserFindManyArgs {
    return {
      include: {
        posts: true,
      },
    };
  }

  findOneById(id: string): Prisma.UserFindFirstArgs {
    return {
      where: {
        id,
      },
      include: {
        posts: true,
      },
    };
  }

  findOneByEmail(email: string): Prisma.UserFindFirstArgs {
    return {
      where: {
        email,
      },
      include: {
        posts: true,
      },
    };
  }

  create(data: Omit<UserEntity, 'posts'>): Prisma.UserCreateArgs {
    return {
      data,
      include: {
        posts: true,
      },
    };
  }
}
