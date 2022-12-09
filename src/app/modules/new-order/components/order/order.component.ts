import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { Pizza } from 'src/app/models/pizza.model';
import { Order } from 'src/app/models/order.model';
import { addOrder } from 'src/app/state/orders/order.action';
import { selectOrderListCount } from 'src/app/state/orders/order.selector';
import { addPizza, clearPizza, removePizza } from 'src/app/state/pizzas/pizza.action';
import { selectPizzaList, selectPizzaListCount } from 'src/app/state/pizzas/pizza.selector';
import { BasicInfoComponent } from '../basic-info/basic-info.component';
import { PizzaManagerService } from '../../../../services/pizza-manager.service';
import { PizzaConfig } from 'src/app/models/pizza-config.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  providers: [MessageService],
})
export class OrderComponent implements OnInit {
  totalPizzaCount: number = 0;
  totalOrderCount: number = 0;
  pizzas: Pizza[] = [];
  @ViewChild('basicInfo', { static: true })
  basicInfoComponent!: BasicInfoComponent;
  constructor(
    private store: Store,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // clear pizza detail panels
    this.clearPizzas();

    this.store
      .select(selectPizzaListCount)
      .subscribe((value) => (this.totalPizzaCount = value));
    this.store
      .select(selectOrderListCount)
      .subscribe((value) => (this.totalOrderCount = value));
    this.store
      .select(selectPizzaList)
      .subscribe((value) => (this.pizzas = value));

    // add default pizza panel for better UX
    this.addPizzaToStore();
  }

  addPizzaToStore() {
    const pizza: Pizza = new Pizza(++this.totalPizzaCount);
    this.store.dispatch(addPizza(pizza));
  }

  clearPizzas() {
    this.store.dispatch(clearPizza());
  }

  removePizza(pizza: Pizza) {
    this.store.dispatch(removePizza(pizza));
  }

  placeOrder() {
    if(this.basicInfoComponent.basicInfoForm.invalid) {
      this.basicInfoComponent.basicInfoForm.markAllAsTouched();
      this.messageService.add({key: 'tr', severity:'warn', summary: 'Failed', detail: 'Please fill the required fields'});
      return;
    }

    const order: Order = new Order(++this.totalOrderCount);
    order.address = this.basicInfoComponent.basicInfoForm.value;
    order.pizzas = this.pizzas;
    this.store.dispatch(addOrder(order));

    this.messageService.add({
      key: 'tr',
      life: 5000,
      severity: 'success',
      summary: 'Success',
      detail: 'Order placed successfully.',
    });
    this.router.navigateByUrl('/dashboard');
  }
}
