import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Pizza } from 'src/app/models/pizza.model';
import { selectPizzaList, selectTotalPrice } from 'src/app/state/pizzas/pizza.selector';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  pizzas$!: Observable<Pizza[]>;
  // [
  //   {size: 'Large', name: 'pizza 1', price: 123, toppings: [{name: 'bacon', price: 0.99}, {name: 'basil', price: 0.99}]},
  //   {size: 'Large', name: 'pizza 2', price: 345, toppings: [{name: 'bacon', price: 0.99}, {name: 'basil', price: 0.99}]}
  // ];

  totalPrice$!: Observable<number>;
  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.pizzas$ = this.store.select(selectPizzaList);
    this.totalPrice$ = this.store.select(selectTotalPrice);
  }

}
