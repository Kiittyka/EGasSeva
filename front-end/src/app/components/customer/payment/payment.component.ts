import { Product } from '../../../models/product.model';

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})


export class PaymentComponent implements OnInit {
  ngOnInit() {
    this.email = localStorage.getItem('email');
    console.log(this.email)
    this.payuform.email = this.email;

    this.name = localStorage.getItem('username');
    this.payuform.firstname = this.name;

    this.phone = localStorage.getItem('contact');
    this.payuform.phone = this.phone;

    this.productinfo = "product"
    this.amount = parseInt(sessionStorage.getItem('amount'))
    this.payuform.amount = (this.amount);
    this.payuform.productinfo = this.productinfo;
    console.log(this.amount)
    console.log(this.payuform.amount)
  }
  public payuform: any = {};
  disablePaymentButton: boolean = true;
  amount: Number;
  email: string;
  name: string;
  phone: string;
  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }
  productinfo: string


  confirmPayment() {
    
    const paymentPayload = {
      email: this.payuform.email,
      name: this.payuform.firstname,
      phone: this.payuform.phone,
      productinfo: this.payuform.productinfo,
      amount: this.payuform.amount
    }

    console.log(this.payuform.productinfo)
    console.log(paymentPayload)
    return this.http.post<any>('http://localhost:8050/payment-service/payment/payment-details', paymentPayload).subscribe(
      data => {
        console.log(data);
        this.payuform.txnid = data.txnId;
        this.payuform.surl = data.sUrl;
        this.payuform.furl = data.fUrl;
        this.payuform.key = data.key;
        this.payuform.hash = data.hash;
        this.payuform.txnid = data.txnId;
        this.disablePaymentButton = false;
      }, error1 => {
        console.log(error1);
      })
  }
}