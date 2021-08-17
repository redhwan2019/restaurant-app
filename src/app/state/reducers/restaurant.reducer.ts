import { Restaurant } from '../../interfaces/restaurant';
import { Action, createReducer, on } from '@ngrx/store';
import {
  LOAD_RESTAURANTS,
  LOAD_RESTAURANTS_SUCCESS,
  DELETE_RESTAURANT,
  ADD_RESTAURANT,
  ADD_RESTAURANT_SUCCESS,
  DELETE_RESTAURANT_SUCCESS,
} from '../actions/restaurant.actions';
const initialState: Restaurant[] = [];

const restaurantReducer = createReducer(
  initialState,
  on(LOAD_RESTAURANTS, (state) => {
    return state;
  }),
  on(LOAD_RESTAURANTS_SUCCESS, (state, newState: any) => {
    // console.log('LOAD_RESTAURANTS_SUCCESS', newState);
    return [...newState['payload']['data']];
  }),

  on(ADD_RESTAURANT_SUCCESS, (state, restaurant: any) => {
    // console.log('ADD_RESTAURANT_SUCCESS', restaurant);
    return [...state, restaurant['payload']['data']];
  }),
  on(DELETE_RESTAURANT_SUCCESS, (state, { restaurant }) => {
    // console.log('DELETE_RESTAURANT_SUCCESS', restaurant);
    return state.filter((r: Restaurant) => r._id !== restaurant._id);
  })
);
export function reducer(state: Restaurant[] | undefined, action: Action) {
  return restaurantReducer(state, action);
}

