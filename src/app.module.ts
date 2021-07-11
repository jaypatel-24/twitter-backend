import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppRepository } from './app.repository';
import { AppService } from './app.service';
import { HashtagsController } from './hashtags/hashtags.controller';
import { PostsController } from './posts/posts.controller';
import { PostEntity } from './posts/posts.entity';
import { UsersController } from './users/users.controller';
import { UserEntity } from './users/users.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: 'twitteradmin',
      password: 'twitteradmin',
      database: 'twitter_backend',
      synchronize: true,
      logger: 'advanced-console',
      logging: true,
      entities: [UserEntity, PostEntity],
    }),

    TypeOrmModule.forFeature([]),
  ],
  controllers: [
    AppController,
    UsersController,
    PostsController,
    HashtagsController,
  ],
  providers: [AppService],
})
export class AppModule {}
