import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/interfaces/product.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts: Product[] = [];
  total: number = 0
  fullname: string= ""
  address: string = ""
  creditCard: number | undefined

  constructor(private productService: ProductsService, private route:Router) { }

  ngOnInit(): void {
    // console.log(this.productService.getCartProducts(), this.cartProducts)
    this.cartProducts = this.productService.getCartProducts()
    // this.cartProducts.map(p => {
    //   this.total += (p.price * (p.quntity ? p.quntity : 1))
    // })
    this.checkTotal()
  }

  removeProduct(productID: number) {
    this.cartProducts = this.productService.removeProduct(productID)
    this.checkTotal()
  }

  checkTotal() {
    this.total = 0
    this.cartProducts.map(p => {
      this.total += (p.price * (p.quntity ? p.quntity : 1))
    })
  }

  onSubmit(){
    this.productService.setUserInfo({
      fullname: this.fullname,
      total: this.total
    })
    this.route.navigateByUrl('/confirmation')
  }
}
