import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormArray } from '@angular/forms';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent  {
  constructor(private fb: FormBuilder) { }
  CustomerForm = this.fb.group({
    CustomerName: ['', Validators.required],
    CustomerEmail: ['', Validators.required],
    CustomerPassword: ['',Validators.required],
    GasAgency: ['',Validators.required],
    CustomerContactNo: ['',Validators.required],
    CustomerAddress: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })
  })
  

}
