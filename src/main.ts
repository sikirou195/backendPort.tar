// main.ts de votre application NestJS
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuration CORS complète
  app.enableCors({
    origin: [
      'https://frontend-port-rho.vercel.app', // Ajoutez cette URL qui correspond à l'erreur
      'https://votre-app-frontend.vercel.app',
      'http://localhost:3000',
      'http://localhost:5173',
      'http://localhost:8080',
      'https://portofolio-moutosikirou.vercel.app',
      // Temporairement, vous pouvez autoriser toutes les origines pour tester
      '*',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization',
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
