
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})


export class PaymentComponent implements OnInit {
  ngOnInit() {
    this.amount = sessionStorage.getItem('amount')
    this.payuform.amount = this.amount;
   // console.log(this.payuform.amount)
    //console.log(this.amount)
  }
  public payuform: any = {};
  disablePaymentButton: boolean = true;
  amount:string;
  constructor(private http: HttpClient) { }
  

  confirmPayment() {
    const paymentPayload = {
      email: this.payuform.email,
      name: this.payuform.firstname,
      phone: this.payuform.phone,
      //productInfo: this.payuform.productinfo,
      amount: this.payuform.amount
    }
    return this.http.post<any>('http://localhost:8970/payment/payment-details', paymentPayload).subscribe(
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