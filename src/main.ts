import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  // ✅ Autorise CORS pour le frontend
  app.enableCors({
    origin: 'http://localhost:8080', // ou '*' pour tout accepter (en dev seulement)
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
// import { NestFactory } from '@nestjs/core';
