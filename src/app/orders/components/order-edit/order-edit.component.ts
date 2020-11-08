import { Component, Input, OnInit } from '@angular/core';
import { IOrder } from '@app/orders/interfaces';

@Component({
  selector: 'order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.scss']
})
export class OrderEditComponent implements OnInit {

  @Input() currentOrder: IOrder;
  constructor() { }

  ngOnInit(): void {
  }

}
