import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Segurança e performance
  app.use(helmet());
  app.use(compression());

  // (Opcional) prefixo global -> sua API fica /api/...
  // app.setGlobalPrefix('api');

  // CORS autorizado (Snack, Expo, local e Render)
  app.enableCors({
    origin: [
      'https://snack.expo.dev',
      /\.expo\.dev$/,
      'http://localhost:19006',
      'http://localhost:3000',
      process.env.APP_WEB_ORIGIN ?? '',         // se usar um web app
      process.env.RENDER_EXTERNAL_URL ?? '',    // domínio público da Render (API)
    ].filter(Boolean),
    methods: ['GET','POST','PUT','PATCH','DELETE','OPTIONS'],
    allowedHeaders: ['Content-Type','Authorization'],
  });

  const port = Number(process.env.PORT) || 3000;
  // Render precisa de 0.0.0.0
  await app.listen(port, '0.0.0.0');
  console.log(`🚀 Server running on http://0.0.0.0:${port}`);
}
bootstrap();
