import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

/**
 * Cada módulo contiene una parte de la aplicación.
 * Cada módulo tiene distinta funcionalidad.
 * Una aplicación puede estar formada de varios módulos.
 */

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
