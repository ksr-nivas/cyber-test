import { ActionReducer, createReducer, on } from '@ngrx/store';
import * as PizzaActions from './pizza.action';
import { Pizza, Topping } from 'src/app/models/pizza.model';

 export const initialState: Pizza[] = [];

 export const PizzaReducer = createReducer(
    initialState,
    on(PizzaActions.addPizza , (pizzasList: Pizza[], pizza: Pizza) => {
        const pizzasClone: Pizza[] = JSON.parse(JSON.stringify(pizzasList));
        const foundInd = pizzasClone.findIndex(item => item.id === pizza.id);
        if(foundInd > -1) {
            pizzasClone.splice(foundInd, 1, pizza);
        } else {
            pizzasClone.push(pizza);
        }
        return pizzasClone;
    }),
    on(PizzaActions.removePizza , (pizzasList: Pizza[], pizza: Pizza) => {
        const pizzasClone: Pizza[] = JSON.parse(JSON.stringify(pizzasList));
        const foundIndex = pizzasClone.findIndex(item => item.id === pizza.id);
        if(foundIndex > -1) {
            pizzasClone.splice(foundIndex, 1); 
        }
        return pizzasClone;
    }),
    on(PizzaActions.clearPizza , (pizzasList: Pizza[]) => {
        let pizzasClone: Pizza[] = JSON.parse(JSON.stringify(pizzasList));
        pizzasClone = [];
        return pizzasClone;
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
 