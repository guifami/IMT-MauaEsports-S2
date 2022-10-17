import { Component, OnInit } from '@angular/core';
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

@Component({
  selector: 'app-bar-chart-horizontal',
  templateUrl: './bar-chart-horizontal.component.html',
  styleUrls: ['./bar-chart-horizontal.component.css']
})
export class BarChartHorizontalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const myChart = new Chart('barChartHorizontal', {
      type: 'bar',
      data: {
        labels: [
          'Jan',
          'Apr',
          'Ago',
          'Nov'
        ],
        datasets: [
          {
            label: 'Partidas',
            data: [12, 19, 3, 8],
            backgroundColor: '#081d3d',
            borderWidth: 0,
          },
        ],
      },
      options: {
        indexAxis: 'y',
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            grid: {
              display: false
            },
            beginAtZero: true,
          }
        },
        layout: {
          padding: 15,
        },
      },
    });
  }

}
