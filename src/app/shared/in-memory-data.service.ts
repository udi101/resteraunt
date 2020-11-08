import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IOrderItem } from '@app/orders/interfaces';
import { menuType } from '../orders/enums/menuType.enum';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const orderItems: Array<IOrderItem> = [
      {
        name: 'Eggs',
        cost: 10,
        menuType: menuType.breakfast
      },
      {
        name: 'Roast Beef sandwich',
        cost: 15,
        menuType: menuType.breakfast
      },
      {
        name: 'salad',
        cost: 5,
        menuType: menuType.breakfast
      },
      {
        name: 'Steak',
        cost: 20,
        menuType: menuType.lunch
      },
      {
        name: 'Lamb chops',
        cost: 30,
        menuType: menuType.lunch
      },
      {
        name: 'French fries',
        cost: 7,
        menuType: menuType.lunch
      },
      {
        name: 'Fish',
        cost: 30,
        menuType: menuType.dinner
      },
      {
        name: 'Spagetti',
        cost: 13,
        menuType: menuType.dinner
      },
      {
        name: 'Sea food',
        cost: 45,
        menuType: menuType.dinner
      },
      {
        name: 'Cake',
        cost: 10,
        menuType: menuType.desert
      },
      {
        name: 'Ice cream',
        cost: 8,
        menuType: menuType.desert
      },
      {
        name: 'Waffle',
        cost: 8,
        menuType: menuType.desert
      },
      {
        name: 'Soda',
        cost: 5,
        menuType: menuType.drink
      },
      {
        name: 'Beer',
        cost: 7,
        menuType: menuType.drink
      },
      {
        name: 'Lemonade',
        cost: 3,
        menuType: menuType.drink
      }
    ];
    return { orderItems };
  }
}
