import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Restaurant } from 'src/app/interfaces/restaurant';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  restaurants: Restaurant[];
  constructor(private store: Store<{ restaurants: Restaurant[] }>) {
    this.store
      .select('restaurants')
      .subscribe((data) => (this.restaurants = data));
  }

  ngOnInit(): void {}
}
