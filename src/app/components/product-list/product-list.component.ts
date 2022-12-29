import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from './../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data => {
      const cartProducts = this.productsService.getCartProducts().map(p => p.id)
      this.products = data.filter(p => !cartProducts.includes(p.id))
    });
  }

  markedProduct(product: Product) {
    this.products = this.products.filter(p => p.id !== product.id)
  }
}