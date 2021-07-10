import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppRepository } from './app.repository';
import { AppService } from './app.service';
import { PostEntity } from './posts/posts.entity';
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
  controllers: [AppController],
  providers: [AppService, AppRepository],
})
export class AppModule {}
