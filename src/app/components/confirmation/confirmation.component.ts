import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  userInfo: any = {
    fullname: "",
    total: 0
  }

  constructor(private productsServices: ProductsService, private route:Router) { }

  ngOnInit(): void {
    this.userInfo = this.productsServices.getUserInfo()
  }

  redirect(){
    this.route.navigateByUrl("/")
  }
}
