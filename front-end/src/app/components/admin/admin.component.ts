import { HttpClient } from '@angular/common/http';
import { HttpClientService } from '../../service/httpclient.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  chartData: any;
  imageUrl : string = "/src/assets/images/logout.svg";
  x: any;
  y: any;
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['Reliance Gas Agency', 'Indo Gas Agency', 'Gogas Agency', 'MVR Gas Agency', 'Jyothi Gas Agency'];
   public barChartLabels: any[] = ['Reliance Gas Agency', 'Indo Gas Agency', 'Gogas Agency', 'MVR Gas Agency', 'Jyothi Gas Agency'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public lineChartOptions: (ChartOptions) = {
    responsive: true,
  };
  public barChart ;
  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }
  ];

    // public barChatData: any[] = this.y
    
    // public barChartLabels: any[] = this.x 


  public lineChartColors: Color[] = [
    {
      borderColor: 'grey',
      backgroundColor: 'lightblue',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.http.get("http://localhost:3006/canvasjschart/chart").subscribe(
    //   data=>{
    //     this.chartData = data;
    //     console.log(data);
    //     for(let chartdata of this.chartData){
    //       for(let i of chartdata){
    //         console.log("x"+i.x)
    //         console.log("y"+i.y)
    //         this.x = i.x
    //         this.y = i.y
    //       }
    //     }
    //   })
  }

}
