import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IOrderItem } from 'src/app/orders/interfaces/order-item.interface';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpClient: HttpClient) { }

  getOrderItems(): Observable<Array<IOrderItem>> {
    return this.httpClient.get<Array<IOrderItem>>('/api/orderItems');
  }
}
