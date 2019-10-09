import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormArray } from '@angular/forms';
import {aadharValidation} from 'e-gas-seva';

@Component({
  selector: 'app-customer-signup-form',
  templateUrl: './customer-signup-form.component.html',
  styleUrls: ['./customer-signup-form.component.css']
})
export class CustomerSignupFormComponent {
  constructor(private fb: FormBuilder) { }
  customerForm = this.fb.group({
    customerName: ['', Validators.required],
    customerEmail: ['', Validators.required],
    customerPassword: ['',Validators.required],
    gasAgency: ['',Validators.required],
    customerContactNo: ['',Validators.required],
    customerAddress: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })
  })
  // aadharValidation(customerName);
  
  // ngOnInit() {
  // }

}
