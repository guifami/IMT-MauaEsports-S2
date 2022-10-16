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
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const myChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: [
          'LOL',
          'TFT',
          'Clash Royale',
          'Rocket League',
          'Overwatch',
          'Rainbow Six',
          'Valorant',
          'CS GO',
          'ERacing',
          'Fifa 22',
        ],
        datasets: [
          {
            label: 'Vitórias',
            data: [12, 19, 3, 5, 2, 3, 8, 4, 16, 9],
            backgroundColor: '#081d3d',
            borderWidth: 0,
          },
          {
            label: 'Derrotas',
            data: [19, 12, 5, 3, 1, 6, 2, 5, 17, 2],
            backgroundColor: '#fbb03c',
            borderWidth: 0,
          },
        ],
      },
      options: {
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            beginAtZero: true,
          }
        },
        layout: {
          padding: 10,
        },
      },
    });
  }
}
