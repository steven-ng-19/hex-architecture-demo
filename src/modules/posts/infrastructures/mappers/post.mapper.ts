import { Injectable } from '@nestjs/common';
import { PostEntity } from '../../domains/entities';
import { Prisma } from '@prisma/client';

@Injectable()
export class PostMapper {
  create(params: Partial<PostEntity>): Prisma.PostCreateArgs {
    return {
      data: {
        productId: params.productId,
        userId: params.userId,
        title: params.title ? params.title : '',
        description: params.description ? params.description : '',
      },
      include: { user: true, product: true },
    };
  }

  findAll(): Prisma.PostFindManyArgs {
    return {
      include: { user: true, product: true },
    };
  }

  findOne(id: string): Prisma.PostFindFirstArgs {
    return {
      where: {
        id,
      },
      include: { user: true, product: true },
    };
  }

  update(id: string, params: Partial<PostEntity>): Prisma.PostUpdateArgs {
    return {
      where: { id },
      data: {
        productId: params.productId,
        userId: params.userId,
        title: params.title,
        description: params.description,
      },
      include: { user: true, product: true },
    };
  }
}
