import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  // ✅ Configuration CORS corrigée
  app.enableCors({
    origin: 'https://frontend-port-rho.vercel.app', // domaine Vercel autorisé
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // utile si tu utilises des cookies ou des headers d’auth
  });

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`🚀 Server is running on http://localhost:${port}`);
}
bootstrap();
