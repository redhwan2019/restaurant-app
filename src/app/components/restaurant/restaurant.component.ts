import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Restaurant } from 'src/app/interfaces/restaurant';
import { DELETE_RESTAURANT } from 'src/app/state/actions/restaurant.actions';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'tr[app-restaurant]',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
})
export class RestaurantComponent implements OnInit {
  @Input() restaurant: Restaurant;

  faTimes = faTimes;
  constructor(private store: Store<{ restaurants: Restaurant[] }>) {}

  ngOnInit(): void {}

  onDeleteRestaurant(restaurant: Restaurant) {
    this.store.dispatch({
      type: DELETE_RESTAURANT.type,
      restaurant: restaurant,
    });
  }
}
