import { CreateProductDto, UpdateProductDto } from '../dtos';
import { Injectable, NotFoundException } from '@nestjs/common';

import { IProductService } from '../../domains/services';
import { ProductEntity } from '../../domains/entities';
import { ProductRepository } from '../../infrastructures/orms';

@Injectable()
export class ProductService implements IProductService {
  constructor(private readonly _productRepository: ProductRepository) {}
  createProduct(product: CreateProductDto): Promise<ProductEntity> {
    return this._productRepository.createProduct(product);
  }
  getProducts(): Promise<ProductEntity[] | []> {
    return this._productRepository.getProducts();
  }
  async getProductById(id: string): Promise<ProductEntity> {
    const product = await this._productRepository.getProductById(id);

    if (!product) throw new NotFoundException('Product not found');

    return product;
  }
  async updateProduct(
    id: string,
    product: UpdateProductDto,
  ): Promise<ProductEntity> {
    const isProduct = await this._productRepository.getProductById(id);
    if (!isProduct) throw new Error('Product not found');
    return this._productRepository.updateProduct(id, product);
  }
}
