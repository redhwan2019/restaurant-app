import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [
  { path: '', component: RestaurantsComponent },
  { path: 'map', pathMatch: 'full', component: MapComponent },
  { path: 'map/:id', pathMatch: 'full', component: MapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
