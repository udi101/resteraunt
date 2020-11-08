import { IOrder, IOrderItem, ITable } from '@app/orders/interfaces';
import { createAction, props } from '@ngrx/store';

export const addMenuItem = createAction(
  '[Orders Page] Add MenuItem',
  props<{ menuItem: IOrderItem }>()
);


export const removeMenuItem = createAction(
  '[Orders Page] Remove MenuItem',
  props<{ menuItem: IOrderItem }>()
);

export const selectTable = createAction(
  '[Orders Page] Select Table',
  props<{ table: ITable }>()
);

export const insertOrder = createAction(
  '[Orders Page] Insert Order',
  props<{ order: IOrder }>()
);

export const setOrderState = createAction(
  '[Orders Page] Set Order State',
  props<{ orderState: string, order: IOrder }>()
)
