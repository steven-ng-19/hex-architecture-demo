import { PostKeys, PostShape, PostValidatorSchema } from './post.dto';

import { createZodDto } from '@anatine/zod-nestjs';

export const UpdatePostValidatorSchema = PostValidatorSchema.extend({
  [PostKeys.productId]: PostShape.productId.trim().uuid(),
  [PostKeys.userId]: PostShape.userId.trim().uuid(),
  [PostKeys.title]: PostShape.title.trim().uuid(),
  [PostKeys.description]: PostShape.description.trim().uuid(),
});

export class UpdatePostDto extends createZodDto(
  UpdatePostValidatorSchema.partial(),
) {}
