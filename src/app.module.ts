import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaisesModule } from './paises/paises.module';
import { CountryVote } from './paises/entities/country-vote.entity';
import 'dotenv/config';


@Module({
imports: [
TypeOrmModule.forRoot({
 type: 'postgres',
  host: 'localhost', // <-- Troque para 'localhost' se rodar fora do Docker
  port: 5432,
  username: 'postgres',
  password: '231199',
  database: 'paises_app',
url: process.env.DATABASE_URL,
entities: [CountryVote],
synchronize: true,
}),
PaisesModule,
],
})
export class AppModule {}