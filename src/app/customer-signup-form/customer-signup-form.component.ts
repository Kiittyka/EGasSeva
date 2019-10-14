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

  get customerStreet(){
    return this.customerForm.get('customerAddress.street')
  }

  get customerCity(){
    return this.customerForm.get('customerAddress.city')
  }

  get customerState(){
    return this.customerForm.get('customerAddress.state')
  }

  get customerZip(){
    return this.customerForm.get('customerAddress.zip')
  }
 x = "";
  emailRegEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  numberRegEx = /^[0-9]{10}/; 
  customerForm = this.fb.group({
    customerName: [this.x, Validators.required],
    customerEmail: ['', [Validators.required, Validators.pattern(this.emailRegEx)]],
    customerPassword: ['',[Validators.required,Validators.minLength(8)]],
    //confirmPassword: [''],
    gasAgency: ['',Validators.required],
    customerContactNo: ['',[Validators.required,Validators.pattern(this.numberRegEx)]],
    customerAddress: this.fb.group({
      street: ['',Validators.required],
      city: ['',Validators.required],
      state: ['',Validators.required],
      zip: ['',Validators.required]
    })
  } )

  zip(){
    this.x = "deepraj";
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
}

  
  // aadharValidation(customerName);
  
  // ngOnInit() {
  // }

}
