import { Component, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { IOrdersState } from '../../state/reducer/orders.reducer';
import { IOrder, ITable } from '@app/orders/interfaces';
import { Observable } from 'rxjs';

import * as OrderSelectors from '@app/orders/state/selectors';
import { tableState } from '@app/orders/enums/table-state.enum';
import { OrdersPageActions } from '@app/orders/state/actions';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  getOrders$: Observable<Array<IOrder>>;
  constructor(private store: Store<IOrdersState>) { }

  ngOnInit(): void {
    this.getOrders$ = this.store.select(OrderSelectors.getOrders);
  }

  orderStateChange(e) {
    this.store.dispatch(OrdersPageActions.setOrderState({ orderState: e.orderState, order: e.order }))
  }
}
