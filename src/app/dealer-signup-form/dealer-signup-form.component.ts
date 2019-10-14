import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-dealer-signup-form',
  templateUrl: './dealer-signup-form.component.html',
  styleUrls: ['./dealer-signup-form.component.css']
})
export class DealerSignupFormComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  get dName(){
    return this.dealerForm.get('dealerName');
  }

  get dealerEmail(){
    return this.dealerForm.get('dealerEmail');
  }

  get dPassword(){
    return this.dealerForm.get('dealerPassword');
  }

  get dealerPhone(){
    return this.dealerForm.get('dealerContactNo');
  }

  get dealerStreet(){
    return this.dealerForm.get('dealerAddress.street');
  }

  get dealerCity(){
    return this.dealerForm.get('dealerAddress.city');
  }

  get dealerState(){
    return this.dealerForm.get('dealerAddress.state');
  }

  get dealerZip(){
    return this.dealerForm.get('dealerAddress.zip');
  }

  emailRegEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  numberRegEx = /^[0-9]{10}/; 
  dealerForm = this.fb.group({
    dealerName: ['', Validators.required],
    dealerEmail: ['', [Validators.required,Validators.pattern(this.emailRegEx)]],
    dealerPassword: ['', [Validators.required, Validators.minLength(8)]],
    dealerContactNo: ['',[Validators.required, Validators.pattern(this.numberRegEx)]],
    dealerAddress: this.fb.group({
      street: ['',Validators.required],
      city: ['',Validators.required],
      state: ['',Validators.required],
      zip: ['',Validators.required]
    })
  })
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
}
  ngOnInit() {
  }

}
