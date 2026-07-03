import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Remove propriedades não existentes no DTO
      forbidNonWhitelisted: true, //Retorna ERRO se enviar campos extras
      transform: true, //Converte automaticamente os tipos
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
