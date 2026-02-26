import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor() {}

  @MessagePattern({ cmd: 'check_quantity' })
  accumulate(data: number[]): number {
    console.log('check quantity', data);
    return Math.round(Math.random() * 100);
  }
}
