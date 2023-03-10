import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  
  constructor(private activedRoute: ActivatedRoute, private productsService: ProductsService) { }

  id: any = this.activedRoute.snapshot.params['id'];
  products: Product[] = [];
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: ''
  }
  quntity: string = "1";

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data => {
      this.products = data
      this.product = this.products.filter((product: Product) => product.id === parseInt(this.id))[0]      
    })
    // this.product = this.productsService.getProductByID(parseInt(this.id))    
  }

  addToCart(product: Product) {
    this.productsService.addToCart({
      ...product,
      quntity: parseInt(this.quntity)
    })
    alert("Added to cart")
  }

}
