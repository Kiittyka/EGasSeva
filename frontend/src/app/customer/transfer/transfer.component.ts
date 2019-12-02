import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  
  
    gasbooking=this.fb.group({
      fullName:['',Validators.required],
      Email: ['',Validators.required],
      Dob:new FormControl(''),
      CustomerContactNo: new FormControl(''),
      GasAgency: ['',Validators.required],
      NewGasAgency: ['',Validators.required],
      
      Adhaarno: ['',Validators.required],
      CustomerAddress: this.fb.group({
        street: [''],             
        city: [''],
        state: [''],
        zip: ['']
      })
    })

  ngOnInit() {
  }
  transferConnection(){
  let name = this.gasbooking.controls['name'].value;

  }

}
