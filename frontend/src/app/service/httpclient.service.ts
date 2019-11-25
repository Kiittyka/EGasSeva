import { Registration } from './../registration/registration.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Employee {
  constructor(
    public name: string,
    public email: string,
    public contact: string,
    public zipcode: number,
    public city: string,
    public state: string,
    public country: string,
    public agency: string,
    public password: string
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  private url: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(
    private httpClient: HttpClient
  ) {
    this.url = 'http://localhost:3000/api/register';
  }
  public registerUser(user: Registration) {
    return this.httpClient.post<Registration[]>(this.url, user, this.httpOptions);
  }

  public createEmployee(employee) {
    console.log(employee);
    return this.httpClient.post<Employee>("http://localhost:8080/employees", employee);
  }


  getHeaders() {
    let username = 'admin'
    let password = 'admin'

    let basicString = 'Basic ' + window.btoa(username + ':' + password)
    return basicString;
  }

}