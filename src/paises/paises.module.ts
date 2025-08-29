import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaisesController } from './paises.controller';
import { PaisesService } from './paises.service';
import { CountryVote } from './entities/country-vote.entity';


@Module({
imports: [TypeOrmModule.forFeature([CountryVote])],
controllers: [PaisesController],
providers: [PaisesService],
})
export class PaisesModule {}