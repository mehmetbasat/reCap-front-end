import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CarComponent } from './components/car/car.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarComponent },
  // { path: 'cars', component: CarComponent },
  // { path: 'cars/brand/:brandId', component: CarComponent },
  // { path: 'cars/color/:colorId', component: CarComponent },
  //{ path: 'cars/brand/:brandId/color/:colorId', component: CarComponent },
  //{ path: 'colors', component: CarComponent },
  //{ path: 'brands', component: CarComponent },
  //{ path: 'carDetail', component: CarDetailComponent },
  //{ path: 'cars/brand/:brandId/carDetail', component: CarDetailComponent },
  //{ path: 'cars/color/:colorId/carDetail', component: CarDetailComponent },
  //{ path: 'cars/car-detail/:carId', component: CarDetailComponent },
  //{ path: 'cart', component: CartComponent },


  { path: 'cars', component: CarComponent },
  { path: 'cars/brand/:brandid', component: CarComponent },
  { path: 'cars/color/:colorid', component: CarComponent },
  { path: 'cars/car-details/:carid', component: CarDetailsComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
