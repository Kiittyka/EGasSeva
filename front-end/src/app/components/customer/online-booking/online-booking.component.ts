import { Component, OnInit } from '@angular/core';

import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { OnlineBooking } from '../../../models/online-booking.model';
import { Customer, HttpClientService } from 'src/app/service/httpclient.service';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-online-booking',
  templateUrl: './online-booking.component.html',
  styleUrls: ['./online-booking.component.css']
})
export class OnlineBookingComponent implements OnInit {
  constructor(private httpClientService: HttpClientService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  isValidFormSubmitted = null;
  adhaarPattern = "^\\d{4}\\s\\d{4}\\s\\d{4}$";

  gasbooking = this.fb.group({
    fullName: [{ value:localStorage.getItem('username'), disabled: true }, Validators.required],
    email: [{ value: localStorage.getItem('email'), disabled: true }, Validators.required],
    contact: [{ value: localStorage.getItem('contact'), disabled: true }, Validators.required],
    gasAgency: [{ value: localStorage.getItem('agency'), disabled: true }, Validators.required],

    adhaarNo: ['', [Validators.required, Validators.pattern(this.adhaarPattern)]],
    country: [{ value: localStorage.getItem('country'), disabled: true }, Validators.required],
    city: [{ value: localStorage.getItem('city'), disabled: true }, Validators.required],
    state: [{ value: localStorage.getItem('state'), disabled: true }, Validators.required],
    zip: [{ value: localStorage.getItem('zipcode'), disabled: true }, Validators.required]

  })
  ngOnInit() {
    
  }
  get adhaarNo() {
    return this.gasbooking.get('adhaarNo');
  }
  sendSms() {

    this.isValidFormSubmitted = false;
    if (this.gasbooking.invalid) {
      return;
    }
    this.isValidFormSubmitted = true;


    //let name = this.gasbooking.controls['fullName'].value;

    let email = this.gasbooking.controls['email'].value;
    let contact = this.gasbooking.controls['contact'].value;
    let agency = this.gasbooking.controls['gasAgency'].value;

    let adhaar = this.gasbooking.controls['adhaarNo'].value;
    let country = this.gasbooking.controls['country'].value;
    let state = this.gasbooking.controls['state'].value;
    let city = this.gasbooking.controls['city'].value;
    let zip = this.gasbooking.controls['zip'].value;
    let accept = false;
    let onlineBooking = new OnlineBooking(email, contact, agency, adhaar, country, state, city, zip, accept);
    console.log(onlineBooking);
    this.httpClientService.sendSms(onlineBooking)
      .subscribe(data => {
        console.log("return",data);
        if (data){
          Swal.fire({
            //title: 'Customer created successfully.?',
            text: 'Booked successfully.',
            icon: 'success',
            showCancelButton: true,
  
            })
        }
        else{
          Swal.fire({
            //title: 'Customer created successfully.?',
            text: 'Already Registered',
            icon: 'error',
            showCancelButton: true,
  
            })
        }


        //alert("Booked successfully.");
        this.router.navigate(['../../customer'], {relativeTo : this.route})
      })
  }

  // goBackToCustomer(){
  //   this.router.navigate(['../../customer'], {relativeTo : this.route})
  // }



}











