
import { Customer } from '../../service/httpclient.service';
import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { HttpClientService } from '../../service/httpclient.service';
import { Zipcode } from '../../models/zipcode.model';
import { CustomValidators } from './custom-validators';
import Swal from 'sweetalert2';
/**
 * @title Stepper that displays errors in the steps
 */
@Component({
  selector: 'stepper-errors-example',
  templateUrl: 'stepper-errors-example.component.html',
  styleUrls: ['stepper-errors-example.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
  }]
})
export class StepperErrorsExampleComponent implements OnInit {
  zip: Zipcode = new Zipcode("", "", "", "","");
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  message: string;
  name: string;
  email: string;
  public frmSignup: FormGroup;


  constructor(private fb: FormBuilder, private httpClientService: HttpClientService
  ) { }

  ngOnInit() {

    this.name = localStorage.getItem("nameStepper");
    this.email = localStorage.getItem("emailStepper");
    // console.log(localStorage.getItem("name"))
    // console.log(localStorage.getItem("email"))
    this.firstFormGroup = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(60)]),
      email: new FormControl('', [Validators.required]),
      contact: new FormControl('', [Validators.required,Validators.pattern('^[789]\\d{9}$')])
    });
    this.secondFormGroup = new FormGroup({
      zipcode: new FormControl('', [Validators.required]),
      city: new FormControl({value:'', disabled:true}, [Validators.required]),
      state: new FormControl({value:'', disabled:true}, [Validators.required]),
      country: new FormControl({value:'', disabled:true}, [Validators.required]),
      agency: new FormControl({value:'', disabled:true}, [Validators.required])
    });
    // this.thirdFormGroup = new FormGroup({
    //   password: new FormControl('', [Validators.required,CustomValidators.patternValidator(/\d/, { hasNumber: true }),CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
    //   CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),Validators.minLength(8)]),

    //   confirm_Password: new FormControl('', Validators.compose([Validators.required]))

    // });

    this.frmSignup = this.fb.group(
      {
        
        password: [
          null,
          Validators.compose([
            Validators.required,
            // check whether the entered password has a number
            CustomValidators.patternValidator(/\d/, {
              hasNumber: true
            }),
            // check whether the entered password has upper case letter
            CustomValidators.patternValidator(/[A-Z]/, {
              hasCapitalCase: true
            }),
            // check whether the entered password has a lower case letter
            CustomValidators.patternValidator(/[a-z]/, {
              hasSmallCase: true
            }),
            // check whether the entered password has a special character
            CustomValidators.patternValidator(
              /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
              {
                hasSpecialCharacters: true
              }
            ),
            Validators.minLength(8)
          ])
        ],
        confirmPassword: [null, Validators.compose([Validators.required])]
      },
      {
        // check whether our password and confirm password match
        validator: CustomValidators.passwordMatchValidator
      }
    )

    //onchange autopopulate
    this.secondFormGroup.get('zipcode').valueChanges.subscribe(value => {
      this.getzipcode(value);
    })

    
    // this.thirdFormGroup.get('confirm_password').valueChanges.subscribe(value=>{
    //   this.confirmPassword();
    // })


    this.httpClientService.confirmAccount()

  }

  public confirmPassword() {
    if (this.thirdFormGroup.get('confirm_password') != this.thirdFormGroup.get('password')) {
      let hasError = true;
    }
  }
  public hasError1 = (controlName: string, errorName: string) => {
    return this.firstFormGroup.controls[controlName].hasError(errorName);
  }
  public hasError2 = (controlName: string, errorName: string) => {
    return this.thirdFormGroup.controls[controlName].hasError(errorName);
  }
  getzipcode(value) {
    this.httpClientService.getzipcode(value).subscribe(data => {
      this.zip = data;
    })
  }


  createCustomer() {

    let name = this.firstFormGroup.controls['name'].value;
    let email = this.firstFormGroup.controls['email'].value;
    let contact = this.firstFormGroup.controls['contact'].value;
    let zipcode = this.secondFormGroup.controls['zipcode'].value;
    let city = this.secondFormGroup.controls['city'].value;
    let state = this.secondFormGroup.controls['state'].value;
    let country = this.secondFormGroup.controls['country'].value;
    let agency = this.secondFormGroup.controls['agency'].value;
    let password = this.frmSignup.controls['password'].value;
    console.log(password)
    let customer = new Customer(name, email, contact, zipcode, city, state, country, agency, password);
    console.log(customer)
    this.httpClientService.createCustomer(customer)
      .subscribe(data => {
        Swal.fire({
          //title: 'Customer created successfully.?',
          text: 'Customer created successfully.',
          icon: 'success',
          showCancelButton: true,

          })
        //alert("Customer created successfully.");
      })
     
  }

}
