import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column({
    type: 'date',
    nullable: true
  })
  dob?: Date;

  @Column()
  email: string;
}
