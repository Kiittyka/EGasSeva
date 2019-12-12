import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Customer, HttpClientService } from 'src/app/service/httpclient.service';
import { Transferconnection } from '../../../models/transferconnection.model';
import { Zipcode } from 'src/app/models/zipcode.model';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  gasbooking: FormGroup;
  zip: Zipcode = new Zipcode("", "", "", "", "");
  constructor(private httpClientService: HttpClientService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  isValidFormSubmitted = null;
  adhaarPattern = "^\\d{4}\\s\\d{4}\\s\\d{4}$";


  ngOnInit() {



    this.gasbooking = this.fb.group({
      fullName: [{ value: localStorage.getItem('username'), disabled: true }, Validators.required],
      email: [{ value: localStorage.getItem('email'), disabled: true }, Validators.required],
      contact: [{ value: localStorage.getItem('contact'), disabled: true }, Validators.required],
      gasAgency: [{ value: localStorage.getItem('agency'), disabled: true }, Validators.required],

      adhaarNo: ['', [Validators.required, Validators.pattern(this.adhaarPattern)]],
      country: [{ value: localStorage.getItem('country'), disabled: true }, Validators.required],
      city: [{ value: localStorage.getItem('city'), disabled: true }, Validators.required],
      state: [{ value: localStorage.getItem('state'), disabled: true }, Validators.required],
      zip: [{ value: localStorage.getItem('zipcode'), disabled: true }, Validators.required],
      newGasAgency: [{ value: '', disabled: true }, Validators.required],
      newCountry: [{ value: '', disabled: true }, Validators.required],
      newCity: [{ value: '', disabled: true }, Validators.required],
      newState: [{ value: '', disabled: true }, Validators.required],
      newZip: ['', Validators.required],
      newAgency: [{ value: '', disabled: true }, Validators.required]


    })
    this.gasbooking.get('newZip').valueChanges.subscribe(value => {
      this.getzipcode(value);
    })
  }


  getzipcode(value) {
    this.httpClientService.getzipcode(value).subscribe(data => {
      this.zip = data;
    })
  }
  get adhaarNo() {
    return this.gasbooking.get('adhaarNo');
  }
  transferConnection() {

    this.isValidFormSubmitted = false;
    if (this.gasbooking.invalid) {
      return;
    }
    this.isValidFormSubmitted = true;


    let name = this.gasbooking.controls['fullName'].value;

    let email = this.gasbooking.controls['email'].value;
    let agency = this.gasbooking.controls['newAgency'].value;

    let adhaar = this.gasbooking.controls['adhaarNo'].value;
    let country = this.gasbooking.controls['newCountry'].value;
    let state = this.gasbooking.controls['newState'].value;
    let city = this.gasbooking.controls['newCity'].value;
    let zip = this.gasbooking.controls['newZip'].value;

    let transferConnection = new Transferconnection(email, name, agency, adhaar, country, state, city, zip);
    console.log(transferConnection);
    this.httpClientService.transferConnection(transferConnection)
      .subscribe(data => {
        Swal.fire({
          //title: 'Customer created successfully.?',
          text: 'Successfully sent to the dealer for confirmation.',
          icon: 'success',
          showCancelButton: true,

          })
        //alert("Registered Successfully");
        this.router.navigate(['../../customer'], {relativeTo : this.route})
      })

  }
}

