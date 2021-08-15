import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from '../../interfaces/restaurant';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css'],
})
export class AddRestaurantComponent implements OnInit {
  @Output() onAddRestaurant: EventEmitter<Restaurant> = new EventEmitter();
  @Input() types: string[];
  restaurantName: string;
  restaurantCoordinate: string;
  restaurantType: string = 'Fast Food';
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.restaurantName) {
      alert('Please enter a restaurant name!');
      return;
    }

    const newRestaurant = {
      name: this.restaurantName,
      coordinate: this.restaurantCoordinate.split(',').map((c) => Number(c)),
      type: this.restaurantType,
    };
    console.log(newRestaurant);
    
    // emit
    this.onAddRestaurant.emit(newRestaurant);

    this.restaurantName = '';
    this.restaurantCoordinate = '';
  }
}
