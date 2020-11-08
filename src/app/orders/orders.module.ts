import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { OrdersComponent } from './containers/orders/orders.component';
import { StoreModule } from '@ngrx/store';
import { ordersReducer } from './state/reducer/orders.reducer';
import { EffectsModule } from '@ngrx/effects';
import { OrdersEffects } from './state/effects/orders.effects';
import { NewOrderComponent } from './containers/new-order/new-order.component';
import { MenuComponent } from './components/menu/menu.component';
import { SharedModule } from '@app/shared/shared.module';
import { OrderEditComponent } from './components/order-edit/order-edit.component';


export const routes: Routes = [
  { path: '', component: OrdersComponent },
  { path: 'add', component: NewOrderComponent }
]


@NgModule({
  declarations: [OrdersComponent, NewOrderComponent, MenuComponent, OrderEditComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([OrdersEffects]),
    StoreModule.forFeature('orders', ordersReducer)
  ]
})
export class OrdersModule { }


