import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IOrder, IOrderItem } from '@app/orders/interfaces';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() menuItems = new Array<IOrderItem>();
  @Output() menuItemSelected = new EventEmitter<IOrderItem>()
  constructor() { }

  ngOnInit(): void {
  }

  addToOrder(menuItem: IOrderItem) {
    this.menuItemSelected.emit(menuItem);
  }

}
