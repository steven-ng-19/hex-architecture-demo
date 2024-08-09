import { Module } from '@nestjs/common';
import { ProductController } from './https/controllers';
import { ProductMapper } from './infrastructures/mappers';
import { ProductRepository } from './infrastructures/orms';
import { ProductService } from './applications/services';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductRepository, ProductService, ProductMapper],
  exports: [ProductService],
})
export class ProductModule {}
