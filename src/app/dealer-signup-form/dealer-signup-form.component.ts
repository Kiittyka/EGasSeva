import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dealer-signup-form',
  templateUrl: './dealer-signup-form.component.html',
  styleUrls: ['./dealer-signup-form.component.css']
})
export class DealerSignupFormComponent implements OnInit {
  constructor(private fb: FormBuilder) { }
  dealerForm = this.fb.group({
    dealerName: ['', Validators.required],
    dealerEmail: ['', Validators.required],
    dealerPassword: ['',Validators.required],
    dealerContactNo: ['',Validators.required],
    dealerAddress: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })
  })

  ngOnInit() {
  }

}
