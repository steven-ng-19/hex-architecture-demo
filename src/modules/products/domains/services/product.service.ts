import { ProductEntity } from '../entities';

export interface IProductService {
  createProduct(product: ProductEntity): Promise<ProductEntity>;
  getProducts(): Promise<ProductEntity[] | []>;
  getProductById(id: string): Promise<ProductEntity>;
  updateProduct(id: string, product: ProductEntity): Promise<ProductEntity>;
}
