import { twitterBaseEntity } from 'src/commons/base.entity';
import { UserEntity } from 'src/users/users.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

@Entity('posts')
export class PostEntity extends twitterBaseEntity {
  @Column({ length: 240, nullable: true })
  text: string;

  @Column('json', { default: [] })
  images: Array<string>;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'author_id' })
  authorId: UserEntity;

  @Column({ name: 'like_count', default: 0 })
  likecount: number;

  @Column({ name: 'repost_count', default: 0 })
  repostCount: number;

  @Column('json', { default: [] })
  hashtags: Array<string>;

  @Column('json', { default: [] })
  mentions: Array<Mentions>;

  @OneToOne(() => PostEntity)
  @JoinColumn({ name: 'orig_post_id' })
  origPost: PostEntity;

  @OneToOne(() => PostEntity)
  @JoinColumn({ name: 'reply_to_id' })
  replyTo: PostEntity;
}

class Mentions {
  name: string;
  id: string;
}
