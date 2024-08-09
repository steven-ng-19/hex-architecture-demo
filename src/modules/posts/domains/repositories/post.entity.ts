import { PostDto } from '../../applications/dtos';
import { PostEntity } from '../entities';

export interface IPostRepository {
  createPost(post: PostEntity): Promise<Partial<PostDto>>;
  getListPosts(): Promise<Partial<PostDto>[] | []>;
  getPostById(id: string): Promise<Partial<PostDto> | null>;
  updatePost(id: string, post: PostEntity): Promise<Partial<PostDto>>;
}
