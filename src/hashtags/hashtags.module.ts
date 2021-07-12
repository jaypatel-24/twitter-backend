import { Module } from '@nestjs/common';
import { HashtagsController } from './hashtags.controller';
import { HashtagsService } from './hashtags.service';

@Module({
  controllers: [HashtagsController],
})
export class HashtagsModule {}
