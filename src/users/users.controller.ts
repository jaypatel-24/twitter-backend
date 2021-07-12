import { Body } from '@nestjs/common';
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
import { CreateUserDto } from './dto/createUserDto.dto';
import { UpdateUserDto } from './dto/updateUserDto.dto';

import { UserEntity } from './users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/@:username')
  async getUserByUSerName(@Param('username') username): Promise<UserEntity> {
    const user = await this.usersService.getUserByUserName(username);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  @Get('/:userId')
  async getUserByUserId(@Param('userId') userId: string): Promise<any> {
    const user = await this.usersService.getUserByUserId(userId);
    if (!user) {
      throw new NotFoundException('User Not Found');
    }
    return user;
  }

  @Post()
  async createNewUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<UserEntity> {
    const user = await this.usersService.createUser(createUserDto);
    return user;
  }

  @Patch('/:userId')
  async updateUserByUserId(
    @Param('userId') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserEntity> {
    const user = await this.usersService.updateUser(userId, updateUserDto);
    return user;
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
