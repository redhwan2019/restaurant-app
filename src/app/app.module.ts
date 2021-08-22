import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module'; // CLI imports

import { AppComponent } from './app.component';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { SingleFilterComponent } from './components/single-filter/single-filter.component';
import { MapComponent } from './components/map/map.component';

import { TableFilterPipe } from './pipes/table-filter.pipe';
import { TableSearchPipe } from './pipes/table-search.pipe';
import { reducer } from './state/reducers/restaurant.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RestaurantEffects } from './state/effects/restaurant.effect';
import { RestaurantsTableComponent } from './components/restaurants-table/restaurants-table.component';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRestaurantComponent,
    RestaurantsComponent,
    RestaurantComponent,
    TableFilterPipe,
    TableSearchPipe,
    SingleFilterComponent,
    SearchFieldComponent,
    MapComponent,
    RestaurantsTableComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    StoreModule.forRoot({ restaurants: reducer }),
    EffectsModule.forRoot([RestaurantEffects]),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faTimes);
  }
}
