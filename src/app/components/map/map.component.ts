import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Restaurant } from '../../interfaces/restaurant';
import { RestaurantService } from '../../services/restaurant.service';
import {
  LOAD_RESTAURANTS,
  LOAD_RESTAURANTS_SUCCESS,
  DELETE_RESTAURANT,
  ADD_RESTAURANT,
} from '../../state/actions/restaurant.actions';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewInit {
  selectedRestaurant: Restaurant;
  map: any;
  restaurants$: Observable<Restaurant[]>;

  constructor(private store: Store<AppState>) {
    this.restaurants$ = this.store.select('restaurants');
  }
  private initMap(): void {
    this.map = L.map('map', {
      center: [1.540149, 103.645251],
      zoom: 12,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );
    tiles.addTo(this.map);

    this.restaurants$.subscribe((value) =>
      value.forEach((e) => {
        console.log(e);
        L.marker([e.coordinate[0], e.coordinate[1]])
          .bindPopup(e.name)
          .addTo(this.map);
      })
    );
  }

  ngAfterViewInit(): void {
    this.store.dispatch({ type: LOAD_RESTAURANTS.type });
    const test = this.store.select('restaurants');
    console.log(test);
    

    this.initMap();
  }
}
