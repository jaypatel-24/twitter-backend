import { Entity, Column } from 'typeorm';
import { twitterBaseEntity } from 'src/commons/base.entity';

@Entity('users')
export class UserEntity extends twitterBaseEntity {
  @Column({ length: 30, nullable: false, unique: true })
  username: string;

  @Column({ nullable: true, length: 50 })
  name: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ nullable: true, length: 240 })
  bio: string;

  @Column({ name: 'follower_count', default: 0 })
  followerCount: number;

  @Column({ name: 'followee_count', default: 0 })
  followeeCount: number;

  @Column('boolean', { default: false })
  verified: boolean;
}
