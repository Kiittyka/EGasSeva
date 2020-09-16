import { HttpClientService } from 'src/app/service/httpclient.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-query',
  templateUrl: './customer-query.component.html',
  styleUrls: ['./customer-query.component.css']
})
export class CustomerQueryComponent implements OnInit {
  customerQueries: Array<any>;
  repliedQueries: Array<any>;

  constructor(private httpClientService: HttpClientService, ) { }

  ngOnInit() {
    var agency = "Gogas Agency";
    console.log("Query Form")
    this.httpClientService.getAllQueries(agency)
      .subscribe(data => {
        this.customerQueries = data
        this.customerQueries = this.customerQueries.filter( u => u !== agency)
        
      })
    this.httpClientService.getRepliedQueries(agency)
      .subscribe(data => {
        this.repliedQueries = data;
        console.log(data);
      })


  }
  replyQuery(x) {
   
    this.httpClientService.updateReply(x)
      .subscribe(data => {
        console.log("reply"+data)
        this.ngOnInit();
      })

    }
  }

