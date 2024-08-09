import { IProductRepository } from '../../domains/repositories';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { ProductEntity } from '../../domains/entities';
import { ProductMapper } from '../mappers';

@Injectable()
export class ProductRepository implements IProductRepository {
  constructor(
    private readonly _prismaService: PrismaService,
    private readonly _productMapper: ProductMapper,
  ) {}
  createProduct(product: ProductEntity): Promise<ProductEntity> {
    const mappedData = this._productMapper.create(product);

    return this._prismaService.product.create(mappedData);
  }
  getProducts(): Promise<ProductEntity[] | []> {
    const mappedData = this._productMapper.findAll();

    return this._prismaService.product.findMany(mappedData);
  }
  getProductById(id: string): Promise<ProductEntity | null> {
    const mappedData = this._productMapper.findOneById(id);

    return this._prismaService.product.findFirst(mappedData);
  }
  updateProduct(
    id: string,
    product: Partial<ProductEntity>,
  ): Promise<ProductEntity> {
    const mappedData = this._productMapper.update(id, product);

    return this._prismaService.product.update(mappedData);
  }
}
