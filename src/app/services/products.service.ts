import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  cartProducts: Product[] = []
  userInfo: object = {}
  products: Product[] = []

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>("assets/data.json")
  }

  getProductByID(id: number) {
    this.getProducts().subscribe(data => {this.products = data})
    return this.products.filter((product: Product) => product.id === id)[0]
  }

  addToCart(product: Product) {
    !this.cartProducts.some(cartProduct => cartProduct.id === product.id) 
    && this.cartProducts.push(product)
  }

  getCartProducts() {
    return this.cartProducts
  }
  
  removeProduct(productID:number) {
    this.cartProducts = this.cartProducts.filter((p: Product) => p.id !== productID)
    return this.cartProducts
  }

  setUserInfo(user: object){
    this.userInfo = user;
    this.cartProducts = []
  }
  getUserInfo(){
    return this.userInfo
  }
}
