import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Restaurant } from 'src/app/interfaces/restaurant';

@Component({
  selector: 'app-restaurants-table',
  templateUrl: './restaurants-table.component.html',
  styleUrls: ['./restaurants-table.component.css'],
})
export class RestaurantsTableComponent implements OnInit {
  @Input() selectedType: string;
  @Input() searchText: string;
  @Output() onDeleteRestaurant: EventEmitter<Restaurant> = new EventEmitter();

  restaurants: Restaurant[];
  filteredRestaurants: Restaurant[];
  constructor(private store: Store<{ restaurants: Restaurant[] }>) {
    this.store
      .select('restaurants')
      .subscribe(
        (data) => (this.restaurants = this.filteredRestaurants = data)
      );
  }
  DeleteRestaurant(restaurant: Restaurant) {
    this.onDeleteRestaurant.emit(restaurant);
  }

  ngOnInit(): void {}
}
