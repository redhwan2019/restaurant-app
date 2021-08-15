import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { RestaurantService } from '../../services/restaurant.service';
import {
  LOAD_RESTAURANTS,
  LOAD_RESTAURANTS_SUCCESS,
  DELETE_RESTAURANT,
  ADD_RESTAURANT_SUCCESS,
  ADD_RESTAURANT,
} from '../actions/restaurant.actions';
@Injectable()
export class RestaurantEffects {
  loadRestaurants$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_RESTAURANTS),
      mergeMap(() =>
        this.restaurantService.getRestaurants().pipe(
          map((restaurants) => ({
            type: LOAD_RESTAURANTS_SUCCESS.type,
            payload: restaurants,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );
  addRestaurant$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ADD_RESTAURANT_SUCCESS),
      exhaustMap((action) =>
        this.restaurantService.addRestaurant(action.restaurant).pipe(
          map((restaurant) => ({
            type: ADD_RESTAURANT_SUCCESS.type,
            payload: restaurant,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private restaurantService: RestaurantService
  ) {}
}
