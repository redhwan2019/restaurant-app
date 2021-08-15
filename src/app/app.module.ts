import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ActionReducerMap, StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { SingleFilterComponent } from './components/single-filter/single-filter.component';
import { MapComponent } from './components/map/map.component';

import { TableFilterPipe } from './table-filter.pipe';
import { reducer } from './state/reducers/restaurant.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RestaurantEffects } from './state/effects/restaurant.effect';
import { TestComponent } from './components/test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    AddRestaurantComponent,
    RestaurantsComponent,
    RestaurantComponent,
    TableFilterPipe,
    SingleFilterComponent,
    SearchFieldComponent,
    MapComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ restaurants: reducer }),
    EffectsModule.forRoot([RestaurantEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
