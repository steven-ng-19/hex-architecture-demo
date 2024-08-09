import {
  ProductKeys,
  ProductShape,
  ProductValidatorSchema,
} from '../../applications/dtos';

import { createZodDto } from '@anatine/zod-nestjs';

export const ProductEntityValidator = ProductValidatorSchema.extend({
  [ProductKeys.id]: ProductShape.id.trim(),
  [ProductKeys.name]: ProductShape.name.trim(),
  [ProductKeys.categoryName]: ProductShape.categoryName.trim(),
  [ProductKeys.description]: ProductShape.description.trim(),
});

export class ProductEntity extends createZodDto(ProductEntityValidator) {}
