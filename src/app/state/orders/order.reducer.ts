import { ActionReducer, createReducer, on } from '@ngrx/store';
import * as OrderActions from './order.action';
import { Order } from 'src/app/models/order.model';

 export const initialState: Order[] = [];

 export const OrderReducer = createReducer(
    initialState,
    on(OrderActions.addOrder , (ordersList: Order[], order: Order) => {
        const ordersClone: Order[] = JSON.parse(JSON.stringify(ordersList));
        const foundInd = ordersClone.findIndex(item => item.id === order.id);
        if(foundInd > -1) {
            ordersClone.splice(foundInd, 1, order);
        } else {
            ordersClone.push(order);
        }
        return ordersClone;
    }),
    on(OrderActions.removeOrder , (ordersList: Order[], order: Order) => {
        const ordersClone: Order[] = JSON.parse(JSON.stringify(ordersList));
        const foundIndex = ordersClone.findIndex(item => item.id === order.id);
        if(foundIndex > -1) {
            ordersClone.splice(foundIndex, 1); 
        }
        return ordersClone;
    }),
 );

 export const metaReducerLocalStorage = (reducer: ActionReducer<any>): ActionReducer<any> => {
    return (state, action) => {
        if(action.type === 'INIT' || action.type === 'UPDATE') {
            const storageValue = localStorage.getItem('state');
            if(storageValue) {
                try {
                    return JSON.parse(storageValue);
                } catch {
                    localStorage.removeItem('state');
                }
            }
        }
        const nextState = reducer(state, action);
        localStorage.setItem('state', JSON.stringify(nextState));
        return nextState;
    }
 }
 