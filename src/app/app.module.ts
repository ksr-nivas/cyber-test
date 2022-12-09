import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ToolbarModule } from 'primeng/toolbar';
import { MenuModule } from 'primeng/menu';
import { StoreModule } from '@ngrx/store';
import { metaReducerLocalStorage, PizzaReducer } from './state/pizzas/pizza.reducer';
import { OrderReducer } from './state/orders/order.reducer';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ToolbarModule,
    MenuModule,
    StoreModule.forRoot({ pizzaList: PizzaReducer, orderList: OrderReducer }, {metaReducers: [metaReducerLocalStorage]})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
