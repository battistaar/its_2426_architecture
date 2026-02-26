import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('order_status_paid')
  async handleUserCreated(data: Record<string, unknown>) {
    console.log(data);
  }
}
