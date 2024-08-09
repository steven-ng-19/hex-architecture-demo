import { ProductValidatorSchema } from 'src/modules/products/applications/dtos';
import { UserValidatorSchema } from 'src/modules/users/applications/dtos';
import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';

export const PostValidatorSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  productId: z.string(),
  userId: z.string(),

  product: ProductValidatorSchema,
  user: UserValidatorSchema,
});

export const PostShape = PostValidatorSchema.shape;

export const PostKeys = PostValidatorSchema.keyof().enum;

export class PostDto extends createZodDto(PostValidatorSchema) {}
