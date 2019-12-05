import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../../service/httpclient.service';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Query } from './query.model';

@Component({
  selector: 'app-query-from',
  templateUrl: './query-from.component.html',
  styleUrls: ['./query-from.component.css']
})
export class QueryFromComponent implements OnInit {
  // queryForm: FormGroup;
  user: Query = new Query ("","","","", "");
  constructor(private fb: FormBuilder,private httpClientService: HttpClientService) {
    // this.createForm();
   }
  
  option_value: any;
  
  ngOnInit(){
    // this.queryForm = new FormGroup({
    //   'name': new FormControl(this.user.fullName, [
    //     Validators.required,
    //     Validators.minLength(4)
        
    //   ]),
      
   // });
}
  // save(): void {
  //   console.log(this.user);
  //   this.httpClientService.saveQueryForm(this.user)
  //     .subscribe(data => {
  //       alert("Form saved successfully");
  //         console.log(data)
  //       console.log(this.option_value);
  //     });
  // }

  
  // title = 'Angular Form Validation Tutorial';
  //  angForm: FormGroup;
  
  //  createForm() {
  //   this.angForm = this.fb.group({
  //      name: ['', Validators.required ]
  //   });
  // }
  queryForm = this.fb.group({
    fullName: ['',Validators.required],
    email: ['',Validators.required],
    phone: ['',Validators.required],
    question: ['',Validators.required],
    others: ['',Validators.required],
  })

  sendQuery(){
    let fullName = this. queryForm.controls['fullName'].value;
    let email = this. queryForm.controls['email'].value;
    let contact = this. queryForm.controls['phone'].value;
    let question = this. queryForm.controls['question'].value;
    let others = this. queryForm.controls['others'].value;
    
    let user = new Query(fullName, email, contact, question,others);

    console.log(user)

    this.httpClientService.saveQueryForm(user)
      .subscribe(data => {
        alert("Form saved successfully");
          console.log(data)
        console.log(this.option_value);
      });

    
    
  }
  
}

