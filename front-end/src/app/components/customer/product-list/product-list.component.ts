import { Router, ActivatedRoute } from '@angular/router';
import { HttpClientService } from './../../../service/httpclient.service';
import { Product } from '../../../models/product.model';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<any>;
  total: number = 0;
  constructor(private httpClientService: HttpClientService, private router: Router, private route: ActivatedRoute ){ }

  ngOnInit() {
    this.httpClientService.getAll().subscribe(data => {
      this.products = data;
    });
  }

  addToCart(product) {
    this.router.navigate(['../cart'], {relativeTo : this.route})
    console.log('Your product has been added to the cart!' + product.price);
    this.httpClientService.addToCart(product);
  }

  increaseAmount(productId) {
    console.log(productId)
    event.stopPropagation();
  }

  decreaseAmount(productId) {
    console.log(productId)
    event.stopPropagation();
  }

}
