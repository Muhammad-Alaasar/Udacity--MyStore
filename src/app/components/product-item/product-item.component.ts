import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: any;
  quntity: string = "1";

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  addToCart(product: any) {
    console.log({
      ...product,
      quntity: parseInt(this.quntity)
    })
    this.productsService.addToCart({
      ...product,
      quntity: parseInt(this.quntity)
    })
    alert("Added to cart")
  }

}
