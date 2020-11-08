import { orderState } from '../enums/order-state.enum';
import { IOrderItem } from './order-item.interface';

export interface IOrder {
  orderId: number;
  tableNumber: number;
  orderItems: Array<IOrderItem>;
  orderState: orderState;
}
