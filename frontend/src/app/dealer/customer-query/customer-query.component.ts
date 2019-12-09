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
    console.log("dealer gas booked")
    this.httpClientService.getAllQueries(agency)
      .subscribe(data => {
        this.customerQueries = data;
        console.log(data);
      })
    this.httpClientService.getRepliedQueries(agency)
      .subscribe(data => {
        this.repliedQueries = data;
        console.log(data);
      })


  }
  replyQuery(x) {
    x.reply = document.getElementById("reply");
    this.httpClientService.updateReply(x)
      .subscribe(data => {
        this.ngOnInit();
      })

    }
  }
