import { CustomerDetail } from './customer-detail.model';
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
  // = new CustomerDetail(0, "", "", "", 0, "", "", "", "", "", 0, false, "");
  
  ngOnInit() {
    var agency = "Gogas Agency";
    console.log("dealer gas booked")
    this.http.get<CustomerDetail[]>("http://localhost:1234/getOnlineBooking" + "/" + agency).subscribe(
      data => {
        this.customerDetail=data;
      }
    )
  }

  updateCustomer(x){
    var sid=x.sid;
    console.log(sid);
    this.http.get("http://localhost:1234/getOnlineBooking/accepted"+"/"+sid).subscribe(
      data=>{this.ngOnInit();}
    )
  } 

}
