import { CustomerDetail } from '../../../models/customer-detail.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booking-info',
  templateUrl: './booking-info.component.html',
  styleUrls: ['./booking-info.component.css']
})
export class BookingInfoComponent implements OnInit {
  customerDetail: Array<any>;
  constructor(private http: HttpClient) { }
  
  ngOnInit() {
    var agent = localStorage.getItem('agency')
    console.log(agent)
    var agency = "MVR Gas Agency";
    console.log("dealer gas booked")
    this.http.get<CustomerDetail[]>("http://localhost:8050/dealer-service/getOnlineBooking" + "/" + agency).subscribe(
      data => {
        console.log(data);
        this.customerDetail=data;
       
      }
    )
  }

  updateCustomer(x){
    var sid=x.sid;
    console.log(sid);
    this.http.get("http://localhost:8050/dealer-service/getOnlineBooking/accepted"+"/"+sid).subscribe(
      data=>{this.ngOnInit();}
    )
  } 

}
