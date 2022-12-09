import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Order } from 'src/app/models/order.model';

export const selectOrderList = createSelector(
    createFeatureSelector('orderList'),
    (state: Order[]) => state
);

export const selectOrderListCount = createSelector(
    createFeatureSelector('orderList'),
    (state: Order[]) => state.length
);

export const selectOrdersTotalPrice = createSelector(
    createFeatureSelector('orderList'),
    (state: Order[]) => {
        return state.reduce((acc, curr) => {
            acc += curr.pizzas.reduce((a, c) => a += c.price, 0);
            return acc;
        }, 0)
    }
);