import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IOrdersState } from '../../state/reducer/orders.reducer';
import { OrdersApiActions } from 'src/app/orders/state/actions'
import { OrdersService } from '../../services/orders.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(private store: Store<IOrdersState>) { }

  ngOnInit(): void {
    this.store.dispatch(OrdersApiActions.getOrderItems());
  }


}
