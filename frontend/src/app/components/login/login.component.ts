import { HttpClientService } from '../../service/httpclient.service';
import { HttpClient } from '@angular/common/http';
import { Login } from '../../models/login.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message;
  user: Login = new Login("", "");
  invalidLogin = false;

  constructor(private fb: FormBuilder, private httpClientService: HttpClientService, private router: Router) { }

  ngOnInit() {
  }

  login(): void {
    console.log(this.user);
    console.log(this.user.email)
    this.httpClientService.loginUser(this.user)
      .subscribe(data => {
        this.message = data;
        console.log(data)
        if (data) {
          if ((this.user.email) == "dealer@gmail.com") {
            localStorage.setItem('email', this.user["email"]);
            this.router.navigate(['/', 'dealer'])
          }
          else if ((this.user.email) == "admin@gmail.com") {
            localStorage.setItem('email', this.user["email"]);
            this.router.navigate(['/', 'adminDashboard'])
          }
          else {
            localStorage.setItem('email', this.user["email"]);
            this.router.navigate(['/', 'customer']);
          }
        }
        else {
          this.message = "Invalid email/password!"
        }
      });
  }
}
  