import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, //Aceita somente os dados do objeto
    forbidNonWhitelisted: true, //Não permite criar objetos com atributos não desejados
    transform: true,

  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
