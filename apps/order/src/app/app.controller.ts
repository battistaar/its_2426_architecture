import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Controller()
export class AppController {
  constructor(protected readonly appSrv: AppService) {}

  @Get()
  async getData() {
    console.log('start');
    const quantity = await this.appSrv.getProductQuantity('123432');
    this.appSrv.sendStatus('payed', 'q124121242');
    return quantity;
  }
}
