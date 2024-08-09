import { UserKeys, UserShape, UserValidatorSchema } from './user.dto';

import { createZodDto } from '@anatine/zod-nestjs';

export const CreateUserValidator = UserValidatorSchema.extend({
  [UserKeys.email]: UserShape.email.email().trim(),
  [UserKeys.firstName]: UserShape.firstName.trim(),
  [UserKeys.lastName]: UserShape.lastName.trim(),
});

export class CreateUserDto extends createZodDto(CreateUserValidator) {}
