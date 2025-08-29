import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';


@Entity('country_vote')
export class CountryVote {
@PrimaryGeneratedColumn()
id: number;


@Column({ unique: true })
countryCode: string;


@Column({ default: 0 })
likes: number;


@Column({ default: 0 })
dislikes: number;


@CreateDateColumn()
createdAt: Date;


@UpdateDateColumn()
updatedAt: Date;
}