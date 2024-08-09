import { Module } from '@nestjs/common';
import { UserController } from './https/controllers';
import { UserMapper } from './infrastructures/mappers';
import { UserRepository } from './infrastructures/orms/user.repository';
import { UserService } from './applications/services/user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserRepository, UserService, UserMapper],
  exports: [UserService],
})
export class UserModule {}
