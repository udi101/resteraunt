import { createReducer, on } from '@ngrx/store';
import * as AppState from 'src/app/reducers';
import { IOrderItem, IOrder, ITable } from 'src/app/orders/interfaces';
import { OrdersApiActions, OrdersPageActions } from 'src/app/orders/state/actions';
import { orderState } from '@app/orders/enums/order-state.enum';
import { state } from '@angular/animations';
import { tableState } from '@app/orders/enums/table-state.enum';

export interface IOrdersState extends AppState.IAppState {
  tables: Array<ITable>,
  orderItems: Array<IOrderItem>,
  currentOrder: IOrder,
  orders: Array<IOrder>,
  lastOrderId: number
}

const initialState: IOrdersState = {
  tables: [
    { tableNumber: 1, tableState: tableState.free },
    { tableNumber: 2, tableState: tableState.free },
    { tableNumber: 3, tableState: tableState.free },
    { tableNumber: 4, tableState: tableState.free },
    { tableNumber: 5, tableState: tableState.free },
  ],
  orderItems: null,
  currentOrder: { orderId: 0, tableNumber: 0, orderItems: [], orderState: orderState.edit },
  orders: [],
  lastOrderId: 0
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
  }),

  on(OrdersPageActions.removeMenuItem, (ordersState, action): IOrdersState => {
    let orderItem = ordersState.currentOrder.orderItems.indexOf(action.menuItem);
    let tempOrderItems = [...ordersState.currentOrder.orderItems];
    tempOrderItems.splice(orderItem, 1);
    console.log(orderItem);
    return {
      ...ordersState,
      currentOrder: {
        ...ordersState.currentOrder,
        orderItems: tempOrderItems
      }
    }
  }),

  on(OrdersPageActions.selectTable, (ordersState, action): IOrdersState => {
    let tempTables = [...ordersState.tables];
    tempTables[tempTables.findIndex(x => x.tableNumber === action.table.tableNumber)] = { tableNumber: action.table.tableNumber, tableState: tableState.occupied };
    return {
      ...ordersState,
      tables: tempTables,
      currentOrder: {
        ...ordersState.currentOrder,
        tableNumber: action.table.tableNumber
      }
    }
  }),


  on(OrdersPageActions.insertOrder, (ordersState, action) => {
    let tempOrder: IOrder = { ...action.order };
    tempOrder.orderId = ordersState.lastOrderId + 1;
    return {
      ...ordersState,
      lastOrderId: tempOrder.orderId,
      orders: [...ordersState.orders, tempOrder],
      currentOrder: {
        ...ordersState.currentOrder,
        orderItems: [],
        tableNumber: 0
      }
    }
  }),

  on(OrdersPageActions.setOrderState, (ordersState, action): IOrdersState => {
    let tempOrders = [...ordersState.orders];
    tempOrders[tempOrders.findIndex(x => x.orderId === action.order.orderId)] = { ...action.order, orderState: orderState[action.orderState] };
    return {
      ...ordersState,
      orders: tempOrders

    }
  })


);
