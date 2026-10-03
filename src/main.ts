import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,               // Strips away properties that do not have validation decorators
      forbidNonWhitelisted: true,    // Throws an error if unknown properties are sent
      transform: true,               // Automatically transforms payloads into instances of DTO classes
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
