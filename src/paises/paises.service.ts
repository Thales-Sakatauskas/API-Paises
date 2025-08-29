import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { CountryVote } from './entities/country-vote.entity';
import { AvaliarPaisDto } from './dto/avaliar-pais.dto';
import axios from 'axios';

@Injectable()
export class PaisesService {
  constructor(
    @InjectRepository(CountryVote)
    private readonly repo: Repository<CountryVote>,
  ) {}

  private baseUrl = process.env.REST_COUNTRIES_BASE || 'https://restcountries.com/v3.1';
  private fields = 'name,population,continents,cca2,cca3';

  /**
   * Retorna os 10 países mais populosos com votos agregados.
   */
  async getTop10() {
    const { data } = await axios.get(`${this.baseUrl}/all?fields=${this.fields}`);
    const sorted = data.sort((a, b) => b.population - a.population).slice(0, 10);

    return this.addVotes(sorted);
  }

  /**
   * Busca países pelo nome e agrega votos.
   */
  async buscar(nome: string) {
    if (!nome) throw new BadRequestException('Informe o nome do país.');
    try {
      const { data } = await axios.get(`${this.baseUrl}/name/${encodeURIComponent(nome)}?fields=${this.fields}`);
      return this.addVotes(data);
    } catch (error) {
      if (error.response?.status === 404) return [];
      throw error;
    }
  }

  /**
   * Avalia um país com like ou dislike.
   */
  async avaliar(dto: AvaliarPaisDto) {
    const code = dto.countryCode.toUpperCase();

    let registro = await this.repo.findOne({ where: { countryCode: code } });
    if (!registro) {
      registro = this.repo.create({ countryCode: code, likes: 0, dislikes: 0 });
    }

    if (dto.vote === 'like') registro.likes += 1;
    else registro.dislikes += 1;

    await this.repo.save(registro);

    return {
      pais: registro.countryCode,
      status: 'sucesso',
      votos: {
        likes: registro.likes,
        dislikes: registro.dislikes,
        total: registro.likes + registro.dislikes,
      },
    };
  }

  /**
   * Agrega informações de votos aos países retornados pela API.
   */
  private async addVotes(countries: any[]) {
    const codes = countries.map(c => c.cca3);
    if (!codes.length) return countries;

    // ✅ Correção: uso de In() para buscar vários códigos
    const votes = await this.repo.findBy({ countryCode: In(codes) });
    const map = new Map(votes.map(v => [v.countryCode, v]));

    return countries.map(c => {
      const v = map.get(c.cca3);
      return {
        name: c.name.common,
        population: c.population,
        continent: c.continents[0],
        votes: {
          likes: v?.likes || 0,
          dislikes: v?.dislikes || 0,
          total: (v?.likes || 0) + (v?.dislikes || 0),
        },
      };
    });
  }
}
