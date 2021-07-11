import {
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
  getUserByUSerName(@Param('username') username): string {
    return `the username is ${username}`;
  }

  @Get('/:userId')
  getUserByUserId(@Param('userId') userId: string): string {
    return `the userId is = ${userId}`;
  }

  @Post()
  createNewUser(): string {
    return 'create user';
  }

  @Patch('/:userId')
  updateUserByUserId(@Param('userId') userId: string): string {
    return `update user by ${userId}`;
  }

  @Put('/:userId/follow')
  followUser(@Param('userId') userId: string): string {
    return `you followed ${userId}`;
  }

  @Delete('/:userId/follow')
  unfollowUser(@Param('userId') userId: string): string {
    return `you un-followed ${userId}`;
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
