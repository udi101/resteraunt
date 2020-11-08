import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { orderState } from '@app/orders/enums/order-state.enum';
import { IOrder } from '@app/orders/interfaces';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @Output() orderStateChanged = new EventEmitter<{ orderState: string, order: IOrder }>();
  @Input() order: IOrder;
  constructor() { }

  ngOnInit(): void {
  }

  setOrderState(orderState: string) {
    this.orderStateChanged.emit({ orderState: orderState, order: this.order });
  }

  getOrderState(e: number): string {
    return orderState[e];
  }

  getClass(order: orderState) {
    switch (order) {
      case orderState.edit:
        return 'edit';
      case orderState.canceled:
        return 'canceled';
      case orderState.paid:
        return 'paid';
    }
  }
}
