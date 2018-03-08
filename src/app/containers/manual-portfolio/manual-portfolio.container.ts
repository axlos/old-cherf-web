import { Component, OnInit } from '@angular/core';
import 'chart.js';

@Component({
  templateUrl: './manual-portfolio.container.html',
  styleUrls: ['./manual-portfolio.container.scss'],
})
export class ManualPortfolioComponent implements OnInit {

  transactions: Array<any>;

  lineChartData: Array<any> = [
    {
      data: [{
        x: 'April',
        y: 20
      }], label: 'BUY'
    },
    {
      data: [{
        x: 'May',
        y: 85
      }], label: 'SELL'
    },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Asset' },
    { data: [18, 48, 77, 9, 100, 27, 40], label: 'SMA 50' },
    { data: [15, 25, 35, 45, 55, 65, 75], label: 'SMA 200' },
  ];
  lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  lineChartOptions: any = {
    maintainAspectRatio: false,
    responsive: true
  };
  lineChartColors: Array<any> = [
    { // blue
      borderColor: 'black',
      backgroundColor: 'tomato',
      pointBackgroundColor: 'tomato',
      fill: false,
      pointRadius: 8,
      showLine: false
    },
    { // blue
      borderColor: 'black',
      backgroundColor: 'chartreuse',
      pointBackgroundColor: 'chartreuse',
      fill: false,
      pointRadius: 8,
      pointStyle: 'circle',
      showLine: false
    },
    { // blue
      borderColor: 'blue',
      backgroundColor: 'blue',
      fill: false,
      pointRadius: 0,
    },
    { // red
      borderColor: 'red',
      backgroundColor: 'red',
      fill: false,
      pointRadius: 0,
      borderWidth: 1,
      // borderDash: [3, 3]
    },
    { // green
      borderColor: 'green',
      backgroundColor: 'green',
      fill: false,
      pointRadius: 0,
      borderWidth: 0.5,
      // borderDash: [5, 5]
    },
  ];
  lineChartLegend = true;
  lineChartType = 'line';

  ngOnInit(): void {
    // Fake information
    this.transactions = [
      {
        no: 1,
        date: '2017-05-15',
        value: 147.42,
        cost: 5,
        type: 1,
        cash: 0.8,
        asset: 67,
        balance: 9877.94
      },
      {
        no: 2,
        date: '2017-05-23',
        value: 147.20,
        cost: 5,
        type: 2,
        cash: 9589.40,
        asset: 0,
        balance: 9589.40
      },
      {
        no: 3,
        date: '2017-05-16',
        value: 151.58,
        cost: 5,
        type: 1,
        cash: 0.23,
        asset: 63,
        balance: 9549.77
      },
      {
        no: 4,
        date: '2017-05-27',
        value: 152.82,
        cost: 5,
        type: 2,
        cash: 9622.66,
        asset: 9,
        balance: 9622.66
      }
    ];

  }

}
