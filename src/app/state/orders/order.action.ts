import { createAction, props } from '@ngrx/store';
import { Order } from 'src/app/models/order.model';

export const addOrder = createAction('[Order] Add Ordera', props<Order>());
export const removeOrder  = createAction('[Order] Remove Order', props<Order>() );
