import { CreatePostDto, PostDto, UpdatePostDto } from '../dtos';
import { Injectable, NotFoundException } from '@nestjs/common';

import { IPostService } from '../../domains/services';
import { PostRepository } from '../../infrastructures/orms';
import { ProductService } from 'src/modules/products/applications/services';
import { UserService } from 'src/modules/users/applications/services/user.service';

@Injectable()
export class PostService implements IPostService {
  constructor(
    private readonly _postRepository: PostRepository,
    private readonly _productService: ProductService,
    private readonly _userService: UserService,
  ) {}
  async createPost(post: CreatePostDto): Promise<Partial<PostDto>> {
    const { productId, userId } = post;

    await Promise.all([
      this._productService.getProductById(productId),
      this._userService.getUserById(userId),
    ]);

    return this._postRepository.createPost(post);
  }
  async getPostById(id: string): Promise<Partial<PostDto>> {
    const post = await this._postRepository.getPostById(id);

    if (!post) throw new NotFoundException('Post not found');

    return post;
  }

  getListPosts(): Promise<Partial<PostDto>[] | []> {
    return this._postRepository.getListPosts();
  }
  updatePost(id: string, post: UpdatePostDto): Promise<Partial<PostDto>> {
    const isPost = this._postRepository.getPostById(id);
    if (!isPost) throw new NotFoundException('Post not found');

    return this._postRepository.updatePost(id, post);
  }
}
