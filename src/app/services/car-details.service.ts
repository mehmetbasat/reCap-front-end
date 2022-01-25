import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/entities/car';
import { SingleResponseModel } from '../models/responseModel/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarDetailsService {
  apiUrl = 'https://localhost:44330/api/';
  constructor(private httpClient: HttpClient) {}

  getCarDetails(carId: number): Observable<SingleResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetails?carId=' + carId;
    return this.httpClient.get<SingleResponseModel<Car>>(newPath);
  }
}
