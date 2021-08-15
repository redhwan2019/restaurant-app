import { Action, createAction, props } from '@ngrx/store';
import { Restaurant } from '../../interfaces/restaurant';

export const LOAD_RESTAURANTS = createAction('[Restaurant] Load');
export const LOAD_RESTAURANTS_SUCCESS = createAction(
  '[Restaurant] Load Success',
  props<{ restaurants: Restaurant[] }>()
);
export const ADD_RESTAURANT = createAction('[Restaurant] Add');
export const ADD_RESTAURANT_SUCCESS = createAction(
  '[Restaurant] Add',
  props<{ restaurant: Restaurant }>()
);
export const DELETE_RESTAURANT = createAction(
  '[Restaurant] Delete',
  props<{ restaurant: Restaurant }>()
);

// export class GetRestaurants {
//   readonly type = GET_RESTAURANTS;
//   constructor() {}
// }

// export class AddRestaurant implements Action {
//   readonly type = ADD_RESTAURANT;
//   constructor(public payload: Restaurant) {}
// }
// export class DeleteRestaurant implements Action {
//   readonly type = DELETE_RESTAURANT;
//   constructor(public payload: Restaurant) {}
// }

// export type All = GetRestaurants | AddRestaurant | DeleteRestaurant;
