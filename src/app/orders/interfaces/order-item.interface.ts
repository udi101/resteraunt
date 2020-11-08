import { menuType } from 'src/app/orders/enums/menuType.enum'

export interface IOrderItem {
  name: string;
  cost: number;
  menuType: menuType;
}
