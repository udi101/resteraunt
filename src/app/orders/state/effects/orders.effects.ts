import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';

import { OrdersService } from 'src/app/orders/services/orders.service';
import { OrdersApiActions } from '../actions';

@Injectable()
export class OrdersEffects {
  constructor(
    private actions$: Actions,
    private ordersService: OrdersService) { }

  getOrderItems$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OrdersApiActions.getOrderItems),
      switchMap(() => this.ordersService.getOrderItems().pipe(
        map(orderItems => OrdersApiActions.getOrderItemsSuccess({ orderItems }))
      ))
    )
  })

}
