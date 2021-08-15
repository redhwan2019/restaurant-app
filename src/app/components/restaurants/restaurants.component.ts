import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Restaurant } from '../../interfaces/restaurant';
import { RestaurantService } from '../../services/restaurant.service';
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
})
export class RestaurantsComponent implements OnInit {
  selectedType: string;
  types: string[] = ['All', 'Fast Food', 'Arabic Cuisine', 'Malay Cuisine'];
  restaurants: Restaurant[] = [];
  filteredRestaurants: Restaurant[] = [];
  constructor(private store: Store<{ restaurants: Restaurant[] }>) {
    this.store
      .select('restaurants')
      .subscribe(
        (data) => (this.restaurants = this.filteredRestaurants = data)
      );
  }

  ngOnInit(): void {}
  TypeChanged(type: any) {
    this.selectedType = type;
  }
  onSearch(text: any) {
    console.log('search text is :', text);
    if (!text) {
      this.filteredRestaurants = this.restaurants;
    }
    if (text) {
      this.filteredRestaurants = this.restaurants.filter((r) =>
        r.name.includes(text)
      );
    }
  }

  DeleteRestaurant(restaurant: Restaurant) {
    // console.log(restaurant);
    // this.restaurantService.deleteRestaurant(restaurant).subscribe((data) => {
    //   if (data['status'] == 200) {
    //     this.restaurants = this.filteredRestaurants = this.restaurants.filter(
    //       (r) => r._id !== restaurant._id
    //     );
    //   }
    // });
  }
  AddRestaurant(restaurant: Restaurant) {
    // this.restaurantService.addRestaurant(restaurant).subscribe((data) => {
    //   if (data['status'] == 200) {
    //     this.restaurants.push(data['data']);
    //   }
    // });
  }
}
