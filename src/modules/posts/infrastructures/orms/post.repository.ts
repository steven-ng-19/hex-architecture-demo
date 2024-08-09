import { IPostRepository } from '../../domains/repositories';
import { Injectable } from '@nestjs/common';
import { PostDto } from '../../applications/dtos';
import { PostEntity } from '../../domains/entities';
import { PostMapper } from '../mappers';
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Injectable()
export class PostRepository implements IPostRepository {
  constructor(
    private readonly _prismaService: PrismaService,
    private readonly _postMapper: PostMapper,
  ) {}
  async createPost(post: Partial<PostEntity>): Promise<Partial<PostDto>> {
    const mappedData = this._postMapper.create(post);

    const result = await this._prismaService.post.create(mappedData);

    return result;
  }
  async getListPosts(): Promise<Partial<PostDto>[]> {
    const mappedData = this._postMapper.findAll();

    const result = await this._prismaService.post.findMany(mappedData);

    return result;
  }
  getPostById(id: string): Promise<Partial<PostDto> | null> {
    const mappedData = this._postMapper.findOne(id);

    const result = this._prismaService.post.findFirst(mappedData);

    return result;
  }
  updatePost(id: string, post: Partial<PostEntity>): Promise<Partial<PostDto>> {
    const mappedData = this._postMapper.update(id, post);

    const result = this._prismaService.post.update(mappedData);

    return result;
  }
}
