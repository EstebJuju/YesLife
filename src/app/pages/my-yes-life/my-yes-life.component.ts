import {Component, OnInit} from '@angular/core';
import Chart from 'chart.js';

import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from '../../variables/charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './my-yes-life.component.html',
  styleUrls: ['./my-yes-life.component.scss']
})
export class MyYesLifeComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  public ngOnInit() {

    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];


    const chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());

    const chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
      type: 'line',
      options: chartExample1.options,
      data: chartExample1.data
    });
  }


  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }
}
