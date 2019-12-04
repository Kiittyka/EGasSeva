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
  queryForm: FormGroup;
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
  save(): void {
    console.log(this.user);
    this.httpClientService.saveQueryForm(this.user)
      .subscribe(data => {
        alert("Form saved successfully");
          console.log(data)
        console.log(this.option_value);
      });
  }
  
  // title = 'Angular Form Validation Tutorial';
  //  angForm: FormGroup;
  
  //  createForm() {
  //   this.angForm = this.fb.group({
  //      name: ['', Validators.required ]
  //   });
  // }
  
}

