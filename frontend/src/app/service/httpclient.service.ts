import { Message } from './../chat/chat-dialog/chat.service';
import { Zipcode } from './../zipcode.model';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Registration } from '../home-page-signup/registration.model';
import { ActivatedRoute } from '@angular/router';

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
  private token : string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {
    this.url = 'http://localhost:3000/api/register';

    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
     
  });
    // console.log("token"+this.token)
  }

 





  getzipcode(value) {
    return this.httpClient.get<Zipcode>("http://localhost:8080/zipcode" + "/" + value);
  }




  public createCustomer(customer) {
    console.log(customer);
    return this.httpClient.post<Customer>("http://localhost:8080/customers", customer);
  }


  public registerUser(user: Registration) {
    return this.httpClient.post<Registration[]>(this.url, user, this.httpOptions)
      
   

  }

  getHeaders() {
    let username = 'admin'
    let password = 'admin'

    let basicString = 'Basic ' + window.btoa(username + ':' + password)
    return basicString;
  }

  /* Email Confirmation */

  public confirmAccount(){
    
    return this.httpClient.get<[]>("http://localhost:3000/api/confirm-account"+"?token="+this.token).subscribe(data=>{
      this.message = data;
      console.log("string is :"+this.message )
    })
  }
}