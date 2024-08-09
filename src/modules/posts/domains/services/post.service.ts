import { CreatePostDto, PostDto, UpdatePostDto } from '../../applications/dtos';

export interface IPostService {
  createPost(post: CreatePostDto): Promise<Partial<PostDto>>;
  getPostById(id: string): Promise<Partial<PostDto>>;
  getListPosts(): Promise<Partial<PostDto>[] | []>;
  updatePost(id: string, post: UpdatePostDto): Promise<Partial<PostDto>>;
}
