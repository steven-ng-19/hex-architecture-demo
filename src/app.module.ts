import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { PostModule } from './modules/posts/post.module';
import { PrismaModule } from './shared/prisma/prisma.module';
import { ProductModule } from './modules/products/product.module';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // Feature
    UserModule,
    ProductModule,
    PostModule,
    //Shared
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
