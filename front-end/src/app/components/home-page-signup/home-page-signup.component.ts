import { FormBuilder } from '@angular/forms';
import { HttpClientService } from '../../service/httpclient.service';
import { Registration } from '../../models/registration.model';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-home-page-signup',
  templateUrl: './home-page-signup.component.html',
  styleUrls: ['./home-page-signup.component.css']
})
export class HomePageSignupComponent implements OnInit {
  isLoading: boolean;
  message: String;
  user: Registration = new Registration("", "", "", true);
  constructor(private fb: FormBuilder, private httpClientService: HttpClientService) {
  }

  ngOnInit() {
  }
  register(): void {
    console.log(this.user);
    this.isLoading = true;
    localStorage.setItem("nameStepper", this.user.username)
    localStorage.setItem("emailStepper", this.user.email)
    console.log(localStorage.getItem("nameStepper"))
    console.log(localStorage.getItem("emailStepper"))
    this.httpClientService.registerUser(this.user)
      .subscribe(data => {
        if(data) {
          this.isLoading = false;
        // alert("Check your inbox to complete registration");
        Swal.fire({
          //title: 'Are you sure?',
          text: 'Check your inbox to complete registration',
          icon: 'info',
          showCancelButton: true,       
          })
          this.message = "Success";
          console.log(data)
        }
        else {
          this.isLoading = false;
          this.message = "Email already exists";
          console.log(data)
        }

          
        });
      }
}

