import {
  UserKeys,
  UserShape,
  UserValidatorSchema,
} from '../../applications/dtos';

import { PostEntity } from 'src/modules/posts/domains/entities';

export class UserEntity {
  id?: string;
  email!: string;
  firstName!: string;
  lastName!: string;
  posts?: PostEntity[];
}

export const UserEntityValidator = UserValidatorSchema.extend({
  [UserKeys.id]: UserShape.id.trim(),
  [UserKeys.email]: UserShape.email.email().trim(),
  [UserKeys.firstName]: UserShape.firstName.trim(),
  [UserKeys.lastName]: UserShape.lastName.trim(),
  [UserKeys.posts]: UserShape.posts.array().optional(),
});
