import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'

import { OrdersApiActions, OrdersPageActions } from '@app/orders/state/actions';
import { IOrdersState } from '@app/orders/state/reducer/orders.reducer';
import { IOrder, IOrderItem } from '@app/orders/interfaces';
import { Observable } from 'rxjs';
import * as OrderSelectors from '@app/orders/state/selectors';


@Component({
  selector: 'new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {

  getOrderItems$: Observable<Array<IOrderItem>>;
  getCurrentOrder$: Observable<IOrder>;

  constructor(private store: Store<IOrdersState>) { }

  ngOnInit(): void {
    this.store.dispatch(OrdersApiActions.getOrderItems());

    this.getOrderItems$ = this.store.select(OrderSelectors.getMenuItems);
    this.getCurrentOrder$ = this.store.select(OrderSelectors.getCurrentOrder);
  }

  menuItemSelected(menuItem: IOrderItem) {
    this.store.dispatch(OrdersPageActions.addMenuItem({ menuItem }));
  }
}
