import { Controller, Get, Param } from '@nestjs/common';

@Controller('hashtags')
export class HashtagsController {
  @Get('/')
  getHashtags(): string {
    return 'all hashtags';
  }

  @Get('/:tag/posts')
  getPostForHashtags(@Param() param): string {
    return `posts for hashtags ${param.tag}`;
  }
}
