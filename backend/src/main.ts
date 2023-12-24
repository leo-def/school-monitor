import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { GenericExceptionFilter } from './api/_filters/exception.filter';
import { TransformInterceptor } from './api/_interceptors/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:8080'],
    methods: ['POST', 'PUT', 'DELETE', 'GET'],
  });
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new GenericExceptionFilter());
  const config = new DocumentBuilder()
    .setTitle('School Monitor')
    .setDescription('School Monitor API')
    .setVersion('1.0')
    .addTag('School Monitor')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
