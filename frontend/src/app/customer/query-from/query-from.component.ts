import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../service/httpclient.service';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Query } from './query.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-query-from',
  templateUrl: './query-from.component.html',
  styleUrls: ['./query-from.component.css']
})
export class QueryFromComponent implements OnInit {
  // queryForm: FormGroup;
  user: Query = new Query("", "", "", "");
  constructor(private fb: FormBuilder, private httpClientService: HttpClientService, private http: HttpClient) {
    // this.createForm();
  }

  option_value: any;

  ngOnInit() {
    this.http.get("http:/")
  }

  queryForm = this.fb.group({
    fullName: [{ value: '', disabled: true }, Validators.required],
    email: [{ value: '', disabled: true }, Validators.required],
    question: ['', Validators.required],
    others: ['', Validators.required],
  })

  sendQuery() {
    let fullName = this.queryForm.controls['fullName'].value;
    let email = this.queryForm.controls['email'].value;

    let question = this.queryForm.controls['question'].value;
    let others = this.queryForm.controls['others'].value;

    let user = new Query(fullName, email, question, others);

    console.log(user)

    this.httpClientService.saveQueryForm(user)
      .subscribe(data => {
        alert("Form saved successfully");
        console.log(data)
        console.log(this.option_value);
      });



  }

}

