import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('AppStart');

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  /**
   * Swagger
   */
  const config = new DocumentBuilder()
    .setTitle('Flights')
    .setDescription('Prueba Técnica | NestJS')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      filter: true,
    },
  });

  await app.listen(process.env.PORT);
  logger.log(`Documentation ${await app.getUrl()}/docs`);
}
bootstrap();
