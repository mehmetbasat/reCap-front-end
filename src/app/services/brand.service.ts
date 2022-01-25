import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/entities/brand';
import { ListResponseModel } from '../models/responseModel/listResponseModel';
import { SingleResponseModel } from '../models/responseModel/singleResponseModel';


@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private apiUrl = 'https://localhost:44330/api/';

  constructor(private httpClient: HttpClient) { }

  getBrands(): Observable<ListResponseModel<Brand>> {
    let newPath = this.apiUrl + 'Brands/getall';
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  
}
