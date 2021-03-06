import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/entities/customer';
import { ListResponseModel } from '../models/responseModel/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
 
  apiUrl = 'https://localhost:44330/api/Customer/getall';
  constructor(private httpClient : HttpClient) { }

 
  getCustomers():Observable<ListResponseModel<Customer>> {
    return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl);
  }


}
