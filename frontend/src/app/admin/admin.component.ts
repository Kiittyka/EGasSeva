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
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['Reliance Gas Agency', 'Indo Gas Agency', 'Gogas Agency', 'MVR Gas Agency', 'Jyothi Gas Agency'];
  public barChartLabels: Label[] = ['Reliance Gas Agency', 'Indo Gas Agency', 'Gogas Agency', 'MVR Gas Agency', 'Jyothi Gas Agency'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public lineChartOptions: (ChartOptions) = {
    responsive: true,
  };
  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
     { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
  constructor() { }

  ngOnInit() {
  }

}
