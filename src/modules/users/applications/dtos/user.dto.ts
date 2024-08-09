import { PostValidatorSchema } from 'src/modules/posts/applications/dtos';
import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';

export const UserValidatorSchema = z.object({
  id: z.string(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  posts: PostValidatorSchema,
});

export const UserShape = UserValidatorSchema.shape;

export const UserKeys = UserValidatorSchema.keyof().enum;

export class UserDto extends createZodDto(UserValidatorSchema) {}
