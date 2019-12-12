import { Component, OnInit } from '@angular/core';
import { HttpClientService } from './../../../service/httpclient.service';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Query } from '../../../models/query.model';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-from',
  templateUrl: './query-from.component.html',
  styleUrls: ['./query-from.component.css']
})
export class QueryFromComponent implements OnInit {
  // queryForm: FormGroup;
  user: Query = new Query("", "", "", "","");
  constructor(private fb: FormBuilder, private httpClientService: HttpClientService, private router: Router, private route: ActivatedRoute) {
    // this.createForm();
  }

  option_value: any;

  ngOnInit() {
    
  }

  queryForm = this.fb.group({
    fullName: [{ value:localStorage.getItem('username'), disabled: true }, Validators.required],
    email: [{ value: localStorage.getItem('email'), disabled: true }, Validators.required],
    question: ['', Validators.required],
    others: ['', Validators.required],
  })

  sendQuery() {
    let fullName = this.queryForm.controls['fullName'].value;
    let email = this.queryForm.controls['email'].value;

    let question = this.queryForm.controls['question'].value;
    let others = this.queryForm.controls['others'].value;
    let agency=localStorage.getItem('agency');
    let user = new Query(fullName, email, question, others,agency);

    console.log(user)

    this.httpClientService.saveQueryForm(user)
      .subscribe(data => {
        Swal.fire({
          //title: 'Customer created successfully.?',
          text: 'Form saved successfully.',
          icon: 'success',
          showCancelButton: true,

          })
        //alert("Form saved successfully");
        console.log(data)
        console.log(this.option_value);
      });

      this.router.navigate(['../../customer'], {relativeTo : this.route})

  }

}

