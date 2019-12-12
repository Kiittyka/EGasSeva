import { Customerdetails } from '../models/customerdetails.model';
import { Message } from './../components/chat-dialog/chat.service';
import { Zipcode } from '../models/zipcode.model';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Registration } from '../models/registration.model';
import { ActivatedRoute } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { Product } from '../models/product.model';
import { retry, catchError } from 'rxjs/operators';
import { Cart } from '../models/cart.model';
import { Login } from '../models/login.model';
import { Phone } from '../models/phone.model';
import { Query } from '../models/query.model';

export class Customer {

  constructor(
    public name: string,
    public email: string,
    public contact: string,
    public zipcode: number,
    public city: string,
    public state: string,
    public country: string,
    public agency: string,
    public password: string
  ) { }
}


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  message = [];
  private url: string;
  private token: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {
    this.url = 'http://localhost:3010/api/register';

    this.route.queryParams.subscribe(params => {
      this.token = params['token'];

    });
    // console.log("token"+this.token)
  }
  getCustomerDetails(email){
    return this.httpClient.get<Customerdetails>("http://localhost:8050/customer-service/getCustomerData"+"/"+email);
  }

  getzipcode(value) {
    console.log(value)
    return this.httpClient.get<Zipcode>("http://localhost:5000/zipcode" + "/" + value);
  }

  public createCustomer(customer) {
    console.log(customer);
    return this.httpClient.post<Customer>("http://localhost:5000/customers", customer);
  }

  public registerUser(user: Registration) {
    return this.httpClient.post<Registration[]>(this.url, user, this.httpOptions)
  }

  public loginUser(user: Login) {
    return this.httpClient.post<Login>("http://localhost:5000/login", user, this.httpOptions)
  }

  getHeaders() {
    let username = 'admin'
    let password = 'admin'

    let basicString = 'Basic ' + window.btoa(username + ':' + password)
    return basicString;
  }

  /* Email Confirmation */

  public confirmAccount() {
    return this.httpClient.get<[]>("http://localhost:3010/api/confirm-account" + "?token=" + this.token).subscribe(data => {
      this.message = data;
      console.log("string is :" + this.message)
    })
  }

  public getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>("http://localhost:8050/product-service/api/list");
  }

  /* Loading Items from Cart */
  public getItems(): Observable<Cart[]> {
    return this.httpClient.get<Cart[]>("http://localhost:8050/product-service/api/GoToCart");
  }

  /** Adding to Cart */
  public addToCart(product: Product) {
    console.log(product);
    return this.httpClient.post<Product>("http://localhost:8050/product-service/api/cart", product, this.httpOptions)
      .subscribe(
        success => console.log("Done"),
        error => console.log(error)
      );
  }

  public updateCart(prodid: number, quant: number): Observable<any> {
    console.log("cartService =" + prodid, quant)
    return this.httpClient.get<any>("http://localhost:8050/product-service/api/updateCart?id=" + prodid + "&quantity=" + quant)
  }

  public delCart(id: number) {
    console.log("del id in cartService" + id)
    return this.httpClient.get<any>("http://localhost:8050/product-service/api/delCart?id=" + id)
  }

  sendSms(onlineBooking) {
   
    //this.httpClient.post("http://localhost:8081/api/v1/sms", number);
    console.log(onlineBooking);
    return this.httpClient.post("http://localhost:8050/customer-service/onlineBookings", onlineBooking);
  }
  saveQueryForm(user: Query) : Observable<any>{
    console.log("user in http Service"+ user.fullName)
    return this.httpClient.post<any>("http://localhost:8050/customer-service/save", user, this.httpOptions);
  }


  transferConnection(transferConnection){
    console.log("http service",transferConnection);
    return this.httpClient.post("http://localhost:8050/customer-service/transferLocation",transferConnection);
  }

  getAllQueries(agency){
  return this.httpClient.get<Query[]>("http://localhost:8050/dealer-service/getCustomerQueries" + "/" + agency)
}
getRepliedQueries(agency){
  return this.httpClient.get<Query[]>("http://localhost:8050/dealer-service/getRepliedQueries" + "/" + agency)

}
 sendMail(x:Query) {
   console.log(x.email)
  return this.httpClient.get<Query[]>("http://localhost:3010/api/sendReply?email=" + x.email + "&reply=" + x.reply)
  .subscribe(
    success => console.log("Done"),
    error => console.log(error)
  );
 }
updateReply(x: Query){
  this.sendMail(x);
  //this.httpClient.get<Query[]>("http://localhost:3010/sendReply?email=" + x.email + "&reply=" + x.reply);
  return this.httpClient.post("http://localhost:8050/dealer-service/updateQueries" , x)
}
}