import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';

export const ProductValidatorSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  categoryName: z.string(),
});

export const ProductShape = ProductValidatorSchema.shape;

export const ProductKeys = ProductValidatorSchema.keyof().enum;

export class ProductDto extends createZodDto(ProductValidatorSchema) {}
