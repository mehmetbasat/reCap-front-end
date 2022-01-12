import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetails } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl: string = 'https://localhost:44330/api/';
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetails';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath =
      this.apiUrl + 'Cars/getcarsbybrandidwithdetails?brandId=' + brandId;

    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorId: number): Observable<ListResponseModel<Car>> {
    let newPath =
      this.apiUrl + 'Cars/getcarsbycoloridwithdetails?colorId=' + colorId;

    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetailByCarId(carId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath=this.apiUrl+"cars/GetCardetailsByCarId?carId="+carId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

  
}
