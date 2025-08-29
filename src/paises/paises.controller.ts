import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { PaisesService } from './paises.service';
import { AvaliarPaisDto } from './dto/avaliar-pais.dto';


@Controller('paises')
export class PaisesController {
constructor(private readonly paisesService: PaisesService) {}


@Get('top10')
getTop10() {
return this.paisesService.getTop10();
}


@Get('buscar')
buscar(@Query('nome') nome: string) {
return this.paisesService.buscar(nome);
}


@Post('avaliar')
avaliar(@Body() dto: AvaliarPaisDto) {
return this.paisesService.avaliar(dto);
}
}