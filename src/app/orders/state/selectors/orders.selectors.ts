import { state } from '@angular/animations';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IOrdersState } from '../reducer/orders.reducer';


export const getOrderFeatureState = createFeatureSelector<IOrdersState>('orders');

export const getMenuItems = createSelector(
  getOrderFeatureState,
  state => state.orderItems
);

export const getCurrentOrder = createSelector(
  getOrderFeatureState,
  state => state.currentOrder
);

export const getTables = createSelector(
  getOrderFeatureState,
  state => state.tables
)

export const getOrders = createSelector(
  getOrderFeatureState,
  state => state.orders
)
