import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get()
  getAllPosts(): string {
    return 'GET All posts';
  }

  @Get('/:postId')
  getPostDetails(@Param() param): string {
    return `get post with postId = ${param.postId}`;
  }

  @Post('')
  createNewPost(): string {
    return 'new post created';
  }

  @Delete('/:postId')
  deletePost(@Param() param): string {
    return `delete post with post id = ${param.postId}`;
  }

  @Put(':postId/like')
  likePost(@Param() param): string {
    return `like post with id = ${param.postId}`;
  }

  @Delete(':postId/like')
  unlikePost(@Param() param): string {
    return `unlike post with id = ${param.postId}`;
  }
}
