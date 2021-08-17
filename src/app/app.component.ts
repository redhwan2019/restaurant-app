import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Restaurant } from './interfaces/restaurant';
import { LOAD_RESTAURANTS } from './state/actions/restaurant.actions';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-app';
  constructor(private store: Store<{ restaurants: Restaurant[] }>) {
  }
  ngOnInit(): void {
    this.store.dispatch(LOAD_RESTAURANTS());
  }
}
