import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express'; // Import des types de `express`

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  // ✅ Ajout de CORS
  app.enableCors({
    origin: ['https://frontend-port-rho.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  });

  // ✅ Réponse manuelle aux requêtes OPTIONS
  app.use((req: Request, res: Response, next: NextFunction) => {
    // Typage explicite pour `next`
    res.header(
      'Access-Control-Allow-Origin',
      'https://frontend-port-rho.vercel.app',
    );
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    if (req.method === 'OPTIONS') {
      return res.sendStatus(204); // Réponse HTTP 204 pour les requêtes OPTIONS
    }
    next(); // Appelle le middleware suivant
  });

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`🚀 Server running on port ${port}`);
}
bootstrap();
