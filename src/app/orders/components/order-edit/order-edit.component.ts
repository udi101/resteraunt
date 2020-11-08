import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IOrder, IOrderItem } from '@app/orders/interfaces';

@Component({
  selector: 'order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.scss']
})
export class OrderEditComponent implements OnInit {

  @Input() currentOrder: IOrder;
  @Output() removeMenuItem = new EventEmitter<IOrderItem>();
  @Output() insertOrder = new EventEmitter<IOrder>();
  constructor() { }

  ngOnInit(): void {
  }

  removeOrderItem(menuItem) {
    this.removeMenuItem.emit(menuItem);
  }

  getTotal(): number {
    let totalCost: number = 0;
    this.currentOrder.orderItems.forEach(order => {
      totalCost += order.cost;
    });
    return totalCost;
  }

  insertOrderEmitter(order: IOrder) {
    this.insertOrder.emit(order)
  }
}
