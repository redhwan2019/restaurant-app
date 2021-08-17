import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from '../interfaces/restaurant';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private apiUrl = 'http://localhost:3000';
  restaurants: Restaurant[] = [];
  constructor(private http: HttpClient) {}

  getRestaurants(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/restaurants`);
  }
  addRestaurant(restaurant: Restaurant): Observable<any> {
    const formData = new FormData();
    formData.append('image', restaurant.image);
    formData.append('name', restaurant.name);
    formData.append('coordinate', JSON.stringify(restaurant.coordinate));
    formData.append('type', restaurant.type);
    return this.http.post<any>(
      `${this.apiUrl}/addRestaurant`,
      formData
      // httpOptions
    );
  }
  deleteRestaurant(restaurant: Restaurant): Observable<any> {
    console.log('delete route', restaurant);
    return this.http.delete<any>(
      `${this.apiUrl}/deleteRestaurant/${restaurant._id}`
    );
  }
}
