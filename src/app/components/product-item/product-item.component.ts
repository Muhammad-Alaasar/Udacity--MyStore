import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

@Input() product: any;
quntity :string = "1";

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(product:any){
    console.log(parseInt(this.quntity), product)
    alert("Added to cart")
  }

}
