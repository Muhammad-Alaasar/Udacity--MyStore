import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from './../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[] = [];

  constructor(private productsService: ProductsService) { }
  
  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data => {
      this.products = data;
     })
  }

}
