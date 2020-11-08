import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { OrdersApiActions, OrdersPageActions } from '@app/orders/state/actions';
import { IOrdersState } from '@app/orders/state/reducer/orders.reducer';
import { IOrder, IOrderItem, ITable } from '@app/orders/interfaces';
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
  getTables$: Observable<Array<ITable>>;

  constructor(private store: Store<IOrdersState>, private router: Router) { }

  ngOnInit(): void {
    this.store.dispatch(OrdersApiActions.getOrderItems());

    this.getOrderItems$ = this.store.select(OrderSelectors.getMenuItems);
    this.getCurrentOrder$ = this.store.select(OrderSelectors.getCurrentOrder);
    this.getTables$ = this.store.select(OrderSelectors.getTables);
  }

  menuItemSelected(menuItem: IOrderItem) {
    this.store.dispatch(OrdersPageActions.addMenuItem({ menuItem }));
  }

  removeItemFromOrder(menuItem: IOrderItem) {
    this.store.dispatch(OrdersPageActions.removeMenuItem({ menuItem }));
  }
  tableSelected(table: ITable) {
    this.store.dispatch(OrdersPageActions.selectTable({ table }))
  }
  insertOrder(order: IOrder) {
    this.store.dispatch(OrdersPageActions.insertOrder({ order }));
    this.router.navigate(['/orders'])
  }
}
