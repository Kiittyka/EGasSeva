import { HttpClientService } from './../../service/httpclient.service';
import { Cart } from './cart.model'
import { Component, OnInit,  Input, EventEmitter, Output } from '@angular/core';


import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  [x: string]: any;
  i:number;
  items: Array<any>;
  total: number = 0;
  ttl:number = 0;

 
  constructor(private httpClientService: HttpClientService, private _router: Router) { 
    console.log("1 on chnages called")
  }

 
  ngOnInit() {
    this.httpClientService.getItems().subscribe(data => {
      console.log(data)
      this.items = data;
      this.addTotal()
    });

  }

 

  // removeItemFromCart(item) {
  //   this.cartService.deleteItem(item);
  //   this.ngOnInit()
  //   this.ngOnChanges()
  //   this.ngOnInit()
  //   //this.ngDoCheck()
    
    
  // }

  /* Updating the cart when qunatity is give */
 

  
  removeItemFromCart(user: Cart): void {
    console.log(user.id)
    
    this.httpClientService.deleteItem(user)
      .subscribe( data => {
        this.items = this.items.filter(u => u !== user);
        for(this.i = 0; this.i < this.items.length; this.i++){
          this.ttl += this.items[this.i].price
        }
        this.total = this.ttl
        this.ttl = 0
      })
  };

  // removeAllItemFromCart() {
  //   this.httpClientService.clearCart();
  //   this.ngOnInit();
  // }

  onBack(): void {
    this._router.navigate(['/accessories']);
  }


  addTotal(){
    for(this.i = 0; this.i < this.items.length; this.i++){
      this.total = this.total + this.items[this.i].price;
    }
  }

}
