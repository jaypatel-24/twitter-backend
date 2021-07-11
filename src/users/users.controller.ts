import {
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UserEntity } from './users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/@:username')
  async getUserByUSerName(@Param('username') username): Promise<UserEntity> {
    const user = await this.usersService.getUserByUSerName(username);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
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
