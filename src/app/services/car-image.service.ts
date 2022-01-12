import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl="https://localhost:44330/api/"
  constructor(private httpClient:HttpClient) { }

  getCarImages():Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl+"CarImages/getall";
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    console.log(carId)
    let newPath=this.apiUrl+"CarImages/getbycarid?carId="+carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}