import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('WAREHOUSE') private whClient: ClientProxy,
    @Inject('ORDER_EVENTS') private orderEvents: ClientProxy
  ) {}
  getProductQuantity(id: string) {
    return firstValueFrom(this.whClient.send({cmd: 'check_quantity'}, { productId: id }));
  }

  sendStatus(status: string, orderId: string) {
    this.orderEvents.emit(`order_status_${status}`, {orderId});
  }
}
