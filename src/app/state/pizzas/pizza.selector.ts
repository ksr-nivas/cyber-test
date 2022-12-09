import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Pizza } from 'src/app/models/pizza.model';

export const selectPizzaList = createSelector(
    createFeatureSelector('pizzaList'),
    (state: Pizza[]) => state
);

export const selectPizzaListCount = createSelector(
    createFeatureSelector('pizzaList'),
    (state: Pizza[]) => state.length
);

export const selectTotalPrice = createSelector(
    createFeatureSelector('pizzaList'),
    (state: Pizza[]) => {
        return state.reduce((acc, curr) => {
            acc += curr.price + (curr.toppings.reduce((ta, tc) => ta += tc.price, 0));
            return acc;
        }, 0)
    }
);