import { IOrder, IOrderItem } from '@app/orders/interfaces';
import { createAction, props } from '@ngrx/store';

export const addMenuItem = createAction(
  '[Orders Page] Add MenuItem',
    props<{ menuItem: IOrderItem }>()
);


export const removeMenuItem = createAction(
  '[Orders Page] Removre MenuItem',
    props<{ menuItem: IOrderItem }>()
);

