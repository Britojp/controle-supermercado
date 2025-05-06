import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, //Aceita somente os dados do objeto
    forbidNonWhitelisted: true, //Não permite criar objetos com atributos não desejados
    transform: true,
  }));

  const config = new DocumentBuilder()
    .setTitle('Supermarket Management')
    .setDescription('The Supermarket Management API description')
    .setVersion('1.0')
    .addTag('Management')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);

}
bootstrap();
