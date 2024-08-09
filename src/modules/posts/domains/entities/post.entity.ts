import {
  PostKeys,
  PostShape,
  PostValidatorSchema,
} from '../../applications/dtos';

import { createZodDto } from '@anatine/zod-nestjs';

// export class PostEntity {
//   constructor(
//     public readonly productId: string,
//     public readonly userId: string,
//     public readonly title: string,
//     public readonly description: string,
//     public readonly id?: string,
//     public readonly product?: ProductEntity,
//     public readonly user?: UserEntity,
//   ) {}
// }

export const PostEntityValidator = PostValidatorSchema.extend({
  [PostKeys.id]: PostShape.id,
  [PostKeys.userId]: PostShape.userId,
  [PostKeys.productId]: PostShape.productId,
  [PostKeys.title]: PostShape.title,
  [PostKeys.description]: PostShape.description,
  [PostKeys.product]: PostShape.product.optional().nullable(),
  [PostKeys.user]: PostShape.user.optional().nullable(),
});

export class PostEntity extends createZodDto(PostEntityValidator) {}
