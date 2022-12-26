import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  cartProducts: Product[] = []

  constructor(private httpClient: HttpClient) { }

  getproducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>("assets/data.json")
  }

  addToCart(product: Product) {
    !this.cartProducts.some(cartProduct => cartProduct.id === product.id) 
    && this.cartProducts.push(product)
  }

  getCartProducts() {
    return this.cartProducts
  }

}
