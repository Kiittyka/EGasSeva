import { FormBuilder } from '@angular/forms';
import { HttpClientService } from './../service/httpclient.service';
import { Registration } from './registration.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page-signup',
  templateUrl: './home-page-signup.component.html',
  styleUrls: ['./home-page-signup.component.css']
})
export class HomePageSignupComponent implements OnInit {
  message: Array<Registration>;
  user: Registration = new Registration("", "", "", true);
  constructor(private fb: FormBuilder, private httpClientService: HttpClientService) {
  }

  ngOnInit() {
  }
  register(): void {
    console.log(this.user);
    localStorage.setItem("name", this.user.username)
    localStorage.setItem("email", this.user.email)
    console.log(localStorage.getItem("name"))
    console.log(localStorage.getItem("email"))
    this.httpClientService.registerUser(this.user)
      .subscribe(data => {
        alert("Check your inbox to complete registration");
        this.message = data;
        console.log(data)
      });
  }
}
