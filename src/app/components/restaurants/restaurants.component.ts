import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common';

import { ADD_RESTAURANT } from 'src/app/state/actions/restaurant.actions';
import { Restaurant } from '../../interfaces/restaurant';
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
})
export class RestaurantsComponent implements OnInit {
  @Output() onRestaurantSelected: EventEmitter<Restaurant> = new EventEmitter();

  selectedType: string;
  searchText: string;
  types: string[] = ['All', 'Fast Food', 'Arabic Cuisine', 'Malay Cuisine'];
  restaurants: Restaurant[] = [];
  filteredRestaurants: Restaurant[] = [];
  constructor(
    private store: Store<{ restaurants: Restaurant[] }>,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {}
  TypeChanged(type: any) {
    this.selectedType = type;
  }

  onSearch(text: any) {
    this.searchText = text;
  }

  AddRestaurant(restaurant: Restaurant) {
    this.store.dispatch({ type: ADD_RESTAURANT.type, restaurant: restaurant });
  }
}
