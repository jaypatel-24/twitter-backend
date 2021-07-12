import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HashtagsController } from './hashtags/hashtags.controller';
import { PostsController } from './posts/posts.controller';
import { PostEntity } from './posts/posts.entity';
import { UserEntity } from './users/users.entity';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { HashtagsModule } from './hashtags/hashtags.module';

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

    UsersModule,
    PostsModule,
    HashtagsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
