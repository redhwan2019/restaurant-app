import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Restaurant } from '../../interfaces/restaurant';

import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  defaultIcon = {
    icon: L.icon({
      iconSize: [25, 41],
      iconAnchor: [13, 0],
      // specify the path here
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    }),
  };
  blackIcon = {
    icon: L.icon({
      iconSize: [25, 41],
      iconAnchor: [13, 0],
      // specify the path here
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
    }),
  };
  map: L.Map;
  selectedRestaurantId: string | null;
  selectedRestaurant: Restaurant;
  restaurants: Restaurant[];

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  private initMap(): void {
    this.map = L.map('map', {
      center: [1.540149, 103.645251],
      zoom: 16,
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
  }

  ngOnInit(): void {
    this.initMap();
    console.log('map inited');
    this.selectedRestaurantId = this.route.snapshot.paramMap.get('id');
    this.store.select('restaurants').subscribe((data) => {
      this.restaurants = data;
      this.restaurants.forEach((e) => {
        if (e._id == this.selectedRestaurantId) {
          L.marker([e.coordinate[0], e.coordinate[1]], this.blackIcon)
            .bindPopup(e.name)
            .addTo(this.map);
          this.map.setView([
            e.coordinate[0],
            e.coordinate[1],
          ]);
        } else {
          L.marker([e.coordinate[0], e.coordinate[1]], this.defaultIcon)
            .bindPopup(e.name)
            .addTo(this.map);
        }
      });
    });
  }
}
