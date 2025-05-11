import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuration CORS pour permettre les requêtes depuis votre domaine Vercel
  app.enableCors({
    origin: [
      'https://votre-domaine-vercel.vercel.app', // Remplacez par votre domaine Vercel
      'http://localhost:3000', // Pour le développement local
      'http://localhost:5173', // Pour Vite en développement
      '*', // Temporairement permettre toutes les origines (à utiliser uniquement en développement)
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization',
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
