import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * Los controladores son las rutas de nuestro servidor
 * @Get() corresponde a la petición get de nuestro servidor
 */

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'capullo';
  }
}
