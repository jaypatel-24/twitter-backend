import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from './users.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  /**
   * @description find a user with given username
   * @returns {Promise<UserEntity>} user if found
   */
  public async getUserByUserName(username: string) {
    return await this.usersRepository.findOne({ username });
  }

  /**
   * @description find a user with given userId
   * @returns {Promise<UserEntity>} user if found
   */
  public async getUserByUserId(userId): Promise<UserEntity> {
    return await this.usersRepository.findOne({ id: userId });
  }

  /**
   * @description create new user with given details
   * @returns {Promise<UserEntity>} users if found
   */
  public async createUser(user: Partial<UserEntity>): Promise<UserEntity> {
    return await this.usersRepository.save(user);
  }

  /**
   * @description update user with given details
   * @returns {Promise<UserEntity>} users if found
   */
  public async updateUser(userId, updateUserDto): Promise<UserEntity> {
    let user = await this.usersRepository.findOne({ id: userId });
    if (!user) {
      return null;
    }

    if (updateUserDto.name) user.name = updateUserDto.name;
    if (updateUserDto.bio) user.bio = updateUserDto.bio;
    if (updateUserDto.avatar) user.avatar = updateUserDto.avatar;
    // if (updateUserDto.password) user.password = updateUserDto.password;

    return await this.usersRepository.save(user);
  }
}
