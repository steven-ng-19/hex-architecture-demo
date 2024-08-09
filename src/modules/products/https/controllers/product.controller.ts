import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from '../../applications/dtos';
import { ProductService } from '../../applications/services';

@Controller('products')
export class ProductController {
  constructor(private readonly _productService: ProductService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createProduct(@Body() data: CreateProductDto) {
    return this._productService.createProduct(data);
  }

  @Get()
  getProducts() {
    return this._productService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this._productService.getProductById(id);
  }

  @Patch(':id')
  updateProduct(@Body() data: UpdateProductDto, @Param('id') id: string) {
    return this._productService.updateProduct(id, data);
  }
}
