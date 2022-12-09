import { Component, OnInit } from '@angular/core';
import { PizzaSizesEnum } from '../../enums/pizza-size.enum';
import { PizzaToppingsEnum } from '../../enums/pizza-toppings.enum';

import { Store } from '@ngrx/store';
import { Pizza, Topping } from 'src/app/models/pizza.model';
import { Observable, take } from 'rxjs';
import { selectPizzaList } from 'src/app/state/pizzas/pizza.selector';
import { addPizza, removePizza } from 'src/app/state/pizzas/pizza.action';
import { PizzaConfig } from 'src/app/models/pizza-config.model';
import { PizzaManagerService } from '../../../../services/pizza-manager.service';

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.scss']
})
export class PizzaDetailsComponent implements OnInit {

  pizzaSizes = PizzaSizesEnum;
  pizzaToppings = PizzaToppingsEnum;

  pizzaConfig!: PizzaConfig;
  pizzas$!: Observable<Pizza[]>;

  constructor(private store: Store, private pizzaManagerService: PizzaManagerService) { }

  ngOnInit(): void {
    this.pizzas$ = this.store.select(selectPizzaList);

    // get pizza config from api
    this.getPizzaConfig();
  }

  getPizzaConfig() {
    this.pizzaManagerService.getPizzaConfig().pipe(take(1)).subscribe(data => {
      this.pizzaConfig = data?.pizzaConfig;
    });
  }

  selectPizzaSize(size: string, pizza: Pizza) {
    const price = this.pizzaConfig.prices.find(price => price.size === size.toLowerCase())?.price ?? 10.99; // some default price
    const updatePizza = {...pizza};
    updatePizza.size = size;
    updatePizza.price = price;
    this.store.dispatch(addPizza(updatePizza));
  }

  addPizzaToppings(topName: string, pizza: Pizza) {
    const updatePizza = {...pizza};
    if(updatePizza.toppings.findIndex(top => top.name === topName) === -1) {
      const topping = new Topping(topName);
      updatePizza.toppings = [...updatePizza.toppings, topping];
    } else {
      updatePizza.toppings = updatePizza.toppings.filter(top => top.name !== topName);
    }
    this.store.dispatch(addPizza(updatePizza));
  }

  deletePizza(pizza: Pizza) {
    this.store.dispatch(removePizza(pizza));
  }

  trackByMethod(index: number, pizza: Pizza) {
    return pizza.id;
  }

  getIndex(top: string, pizza: Pizza) {
    return pizza.toppings.findIndex(pt => pt.name === top);
  }

}
