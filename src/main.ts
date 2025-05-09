import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  // ✅ Autorise CORS en fonction de l'environnement
  app.enableCors({
    origin: [
      'http://localhost:8080', // utile en dev
      'https://ton-portfolio.vercel.app', // frontend en ligne sur Vercel
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
