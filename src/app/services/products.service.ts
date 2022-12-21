import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: object[] = [];
  
  constructor(private httpClient:HttpClient) { }

  getproducts() :Observable<object>{
    return this.httpClient.get<object[]>("assets/data.json");
  }
}
