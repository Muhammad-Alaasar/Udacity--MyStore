import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:any;

  constructor(private productsService: ProductsService) { }
  
  ngOnInit(): void {
    this.productsService.getproducts().subscribe(data => {
      this.products = data;
     })
  }

}
