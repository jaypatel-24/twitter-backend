import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/@:username')
  getUserByUSerName(@Param() param): string {
    return `the username is ${param.username}`;
  }

  @Get('/:userId')
  getUserByUserId(@Param() param): string {
    return `the userId is = ${param.userId}`;
  }

  @Post()
  createNewUser(): string {
    return 'create user';
  }

  @Patch('/:userId')
  updateUserByUserId(): string {
    return 'update user by userId';
  }

  @Put('/:userId/follow')
  followUser(): string {
    return 'you followed user';
  }

  @Delete('/:userId/follow')
  unfollowUser(): string {
    return 'you un-followed user';
  }

  @Get('{userid}/followers')
  getFollowerOfUser(): string {
    return 'list of followers of this user';
  }

  @Put('{userid}/followers')
  getFolloweesOfUser(): string {
    return 'list of followees of this user';
  }
}
