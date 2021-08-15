import { Restaurant } from '../../interfaces/restaurant';
import { Action, createReducer, on } from '@ngrx/store';
import {
  LOAD_RESTAURANTS,
  LOAD_RESTAURANTS_SUCCESS,
  DELETE_RESTAURANT,
  ADD_RESTAURANT,
  ADD_RESTAURANT_SUCCESS,
} from '../actions/restaurant.actions';
const initialState: Restaurant[] = [];


const restaurantReducer = createReducer(
  initialState,
  on(LOAD_RESTAURANTS, (state) => {
    return state;
  }),
  on(LOAD_RESTAURANTS_SUCCESS, (state, newState:any) => {
    console.log('LOAD_RESTAURANTS_SUCCESS', newState['payload']);
    return newState['payload']['data'];
  }),
  on(ADD_RESTAURANT_SUCCESS, (state, { restaurant }) => [...state, restaurant]),
  on(DELETE_RESTAURANT, (state, { restaurant }) =>
    state.filter((r: Restaurant) => r._id !== restaurant._id)
  )
);
export function reducer(state: Restaurant[] | undefined, action: Action) {
  return restaurantReducer(state, action);
}
// export function restaurantReducer(
//   state: Restaurant[] = defaultState,
//   action: RestaurantActions.All
// ) {
//   console.log(action.type, state);

//   switch (action.type) {
//     case RestaurantActions.ADD_RESTAURANT:
//       return [];

//     case RestaurantActions.GET_RESTAURANTS:
//       return []; // need edit

//     case RestaurantActions.DELETE_RESTAURANT:
//       const shallowClone = [...state];
//       return shallowClone.filter((r) => r._id !== action.payload._id);

//     default:
//       return defaultState;
//   }
// }
