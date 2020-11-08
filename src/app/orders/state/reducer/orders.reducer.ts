import { createReducer, on } from '@ngrx/store';
import * as AppState from 'src/app/reducers';
import { IOrderItem, IOrder } from 'src/app/orders/interfaces';
import { OrdersApiActions, OrdersPageActions } from 'src/app/orders/state/actions';
import { orderState } from '@app/orders/enums/order-state.enum';
import { state } from '@angular/animations';

export interface IOrdersState extends AppState.IAppState {
  orderItems: Array<IOrderItem>,
  currentOrder: IOrder,
  orders: Array<IOrder>
}

const initialState: IOrdersState = {
  orderItems: null,
  currentOrder: { orderId: 0, orderItems: [], orderState: orderState.edit },
  orders: []
}

export const ordersReducer = createReducer<IOrdersState>(initialState,
  on(OrdersApiActions.getOrders, (ordersState, action): IOrdersState => {
    return {
      ...ordersState, orders: null
    }
  }),
  on(OrdersApiActions.getOrderItemsSuccess, (ordersState, action): IOrdersState => {
    return {
      ...ordersState, orderItems: action.orderItems
    }
  }),
  on(OrdersPageActions.addMenuItem, (orderState, action): IOrdersState => {
    return {
      ...orderState,
      currentOrder: {
        ...orderState.currentOrder,
        orderItems: [...orderState.currentOrder.orderItems, action.menuItem]
      }
    }
  })

);
