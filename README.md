<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## 🛠️ Tecnologias Utilizadas

- **Node.js + NestJS**: estrutura modular e escalável.  
- **TypeORM**: ORM para integração com banco de dados.  
- **PostgreSQL**: banco de dados relacional.  
- **Axios**: para consumir a API externa REST Countries.  
- **Class-validator**: para validar dados de entrada.

## 📂 Estrutura da API

- **Controller** → Recebe as requisições (`GET` e `POST`).  
- **Service** → Contém a lógica de negócio (chamadas à API externa, ordenação, salvar votos).  
- **Entity** → Representa a tabela no banco (`CountryVote`).  
- **DTO** → Define a estrutura dos dados de entrada (`AvaliarPaisDto`).

## Project setup

```bash
npm i -g @nestjs/cli
nest new api-paises
cd api-paises
npm i @nestjs/typeorm typeorm pg axios dotenv
npm install @nestjs/typeorm typeorm pg axios dotenv class-validator class-transformer
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## ⚡ Funcionalidades / Endpoints

| Método | Endpoint                     | Descrição                              |
|--------|-----------------------------|----------------------------------------|
| GET    | `/countries/top10`          | Lista os 10 países mais populosos.      |
| GET    | `/countries/:name`          | Busca um país pelo nome.               |
| POST   | `/countries/vote`           | Avalia um país com "curtir" ou "não curtir". |

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

