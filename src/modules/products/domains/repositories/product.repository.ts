import { ProductEntity } from '../entities';

export interface IProductRepository {
  createProduct(product: ProductEntity): Promise<ProductEntity>;
  getProducts(): Promise<ProductEntity[] | []>;
  getProductById(id: string): Promise<ProductEntity | null>;
  updateProduct(
    id: string,
    product: Partial<ProductEntity>,
  ): Promise<ProductEntity>;
}
