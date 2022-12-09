import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { PizzaDetailsComponent } from './components/pizza-details/pizza-details.component';
import { SummaryComponent } from './components/summary/summary.component';
import { OrderComponent } from './components/order/order.component';
import { NewOrderRoutingModule } from './new-order-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CheckboxModule } from 'primeng/checkbox';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { SelectButtonModule } from 'primeng/selectbutton';


@NgModule({
  declarations: [
    BasicInfoComponent,
    PizzaDetailsComponent,
    SummaryComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PanelModule,
    ButtonModule,
    SelectButtonModule,
    CheckboxModule,
    ToastModule,
    NewOrderRoutingModule
  ]
})
export class NewOrderModule { }
