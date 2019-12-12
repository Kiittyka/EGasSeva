import { Customerdetails } from './../../../models/customerdetails.model';
import { HttpClientService } from './../../../service/httpclient.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  email;
  username: string;
  constructor(private httpClientService:HttpClientService) { }

  ngOnInit() {
    this.email=localStorage.getItem('email');
    //this.username=localStorage.getItem('name');
    this.httpClientService.getCustomerDetails(this.email).subscribe(data => {
      
      localStorage.setItem('username',data.name);
      localStorage.setItem('contact',data.contact);
      console.log(localStorage.getItem('contact'));
      localStorage.setItem('agency',data.agency);
      localStorage.setItem('country',data.country);
      localStorage.setItem('state',data.state);
      localStorage.setItem('city',data.city);
      localStorage.setItem('zipcode',data.zipcode);
      this.username=localStorage.getItem('username');
    })
   
  }
  
}
