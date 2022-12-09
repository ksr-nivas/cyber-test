import { createAction, props } from '@ngrx/store';
import { Pizza } from 'src/app/models/pizza.model';

export const addPizza = createAction('[Pizza] Add Pizzaa', props<Pizza>());
export const removePizza  = createAction('[Pizza] Remove Pizza', props<Pizza>() );
export const clearPizza  = createAction('[Pizza] Clear Pizza' );
