import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  // ✅ Autorise CORS en fonction de l'environnement
  app.enableCors({
    origin:
      process.env.NODE_ENV === 'production'
        ? ['https://ton-portfolio.vercel.app']
        : ['http://localhost:8080'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
