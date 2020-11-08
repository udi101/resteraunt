import { IOrder, IOrderItem } from '@app/orders/interfaces';
import { createAction, props } from '@ngrx/store';

export const getOrders = createAction(
  '[Orders Api] Get Orders'
);

export const getOrdersSuccess = createAction(
  '[Orders Api] Get Orders Success',
  props<{ orders: Array<IOrder> }>()
);

export const getOrderItems = createAction(
  '[Orders Api] Get Order Items',
);

export const getOrderItemsSuccess = createAction(
  '[Orders Api] Get Order Items Success',
  props<{ orderItems: Array<IOrderItem> }>()
);
