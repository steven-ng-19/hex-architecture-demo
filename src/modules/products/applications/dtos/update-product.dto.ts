import {
  ProductKeys,
  ProductShape,
  ProductValidatorSchema,
} from './product.dto';

import { createZodDto } from '@anatine/zod-nestjs';

export const UpdateProductValidator = ProductValidatorSchema.extend({
  [ProductKeys.name]: ProductShape.name.trim(),
  [ProductKeys.categoryName]: ProductShape.categoryName.trim(),
  [ProductKeys.description]: ProductShape.description.trim(),
});

export class UpdateProductDto extends createZodDto(
  UpdateProductValidator.partial(),
) {}
