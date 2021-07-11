import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get()
  getAllPosts(): string {
    return 'GET All posts';
  }

  @Get('/:postId')
  getPostDetails(@Param('postId') postId): string {
    return `get post with postId = ${postId}`;
  }

  @Post()
  createNewPost(): string {
    return 'new post created';
  }

  @Delete('/:postId')
  deletePost(@Param('postId') postId: string): string {
    return `delete post with post id = ${postId}`;
  }

  @Put(':postId/like')
  likePost(@Param('postId') postId: string): string {
    return `like post with id = ${postId}`;
  }

  @Delete(':postId/like')
  unlikePost(@Param('postId') postId: string): string {
    return `unlike post with id = ${postId}`;
  }
}
