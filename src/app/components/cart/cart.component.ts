import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts: Product[] = [];
  total :number = 0

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    console.log(this.productService.getCartProducts())
    this.cartProducts = this.productService.getCartProducts()
    this.cartProducts.map(p => {
      this.total += (p.price * (p.quntity ? p.quntity : 1))
    })
  }

  removeProduct(productID: number) {
    this.cartProducts = this.cartProducts.filter((p : Product) => p.id !== productID)
  }

  checkTotal() {
    this.total = 0
    this.cartProducts.map(p => {
      this.total += (p.price * (p.quntity ? p.quntity : 1))
    })
  }
}
