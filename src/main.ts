import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Ativa validação global dos DTOs
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
  }));

  // Define a porta, você pode pegar do .env
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`API rodando em http://localhost:${port}`);
}
bootstrap();
