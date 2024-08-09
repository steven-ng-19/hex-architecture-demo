import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostService } from '../../applications/services/post.service';
import { CreatePostDto, UpdatePostDto } from '../../applications/dtos';

@Controller('posts')
export class PostController {
  constructor(private readonly _postService: PostService) {}

  @Post()
  createPost(@Body() data: CreatePostDto) {
    return this._postService.createPost(data);
  }

  @Get()
  getPosts() {
    return this._postService.getListPosts();
  }

  @Get(':id')
  getPost(@Param('id') id: string) {
    return this._postService.getPostById(id);
  }

  @Patch(':id')
  updatePost(@Param('id') id: string, @Body() data: UpdatePostDto) {
    return this._postService.updatePost(id, data);
  }
}
