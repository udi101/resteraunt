import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './reducers';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { EffectsModule } from '@ngrx/effects';
import { InMemoryDataService } from './shared/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500, dataEncapsulation: false }),
    SharedModule,
    StoreModule.forRoot(appReducer, {}),
    StoreDevtoolsModule.instrument({ name: 'Orders', maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
