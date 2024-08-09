import { Module } from '@nestjs/common';
import { PostController } from './https/controllers';
import { PostMapper } from './infrastructures/mappers';
import { PostRepository } from './infrastructures/orms';
import { PostService } from './applications/services/post.service';
import { ProductModule } from '../products/product.module';
import { UserModule } from '../users/user.module';

@Module({
  imports: [ProductModule, UserModule],
  controllers: [PostController],
  providers: [PostRepository, PostService, PostMapper],
  exports: [],
})
export class PostModule {}
