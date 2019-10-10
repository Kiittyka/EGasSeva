import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormArray } from '@angular/forms';


@Component({
  selector: 'app-customer-signup-form',
  templateUrl: './customer-signup-form.component.html',
  styleUrls: ['./customer-signup-form.component.css']
})
export class CustomerSignupFormComponent {
  constructor(private fb: FormBuilder) { }
  // returning the reference of form input fields
  get customerName(){
    return this.customerForm.get("customerName");
  }

  get customerEmail(){
    return this.customerForm.get("customerEmail");
  }

  get customerPassword(){
    return this.customerForm.get("customerPassword");
  }

  get customerPhone(){
    return this.customerForm.get('customerContactNo')
  }

  emailRegEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  customerForm = this.fb.group({
    customerName: ['', Validators.required],
    customerEmail: ['', [Validators.required, Validators.pattern(this.emailRegEx)]],
    customerPassword: ['',[Validators.required,Validators.minLength(8)]],
    //confirmPassword: [''],
    gasAgency: ['',Validators.required],
    customerContactNo: ['',[Validators.required,Validators.minLength(10)]],
    customerAddress: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })
  } )

  
  // aadharValidation(customerName);
  
  // ngOnInit() {
  // }

}
