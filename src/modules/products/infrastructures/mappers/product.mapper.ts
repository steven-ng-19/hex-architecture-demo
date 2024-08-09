import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ProductEntity } from '../../domains/entities';

@Injectable()
export class ProductMapper {
  create(params: ProductEntity): Prisma.ProductCreateArgs {
    return {
      data: params,
    };
  }

  findAll(): Prisma.ProductFindManyArgs {
    return {};
  }

  findOneById(id: string): Prisma.ProductFindFirstArgs {
    return {
      where: {
        id,
      },
    };
  }

  update(id: string, params: Partial<ProductEntity>): Prisma.ProductUpdateArgs {
    return {
      where: { id },
      data: params,
    };
  }
}
