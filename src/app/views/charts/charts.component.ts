import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData } from 'chart.js';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [CommonModule, MatCardModule, BaseChartDirective],
  template: `
    <div class="charts-page">
      <mat-card>
        <mat-card-header><mat-card-title>Charts</mat-card-title></mat-card-header>
        <mat-card-content>
          <p>Chart.js is a simple yet flexible JavaScript charting library.</p>
          
          <h3>Line Chart</h3>
          <div class="chart-container">
            <canvas baseChart [data]="lineChartData" [options]="lineChartOptions" [type]="'line'"></canvas>
          </div>
          
          <h3>Bar Chart</h3>
          <div class="chart-container">
            <canvas baseChart [data]="barChartData" [options]="barChartOptions" [type]="'bar'"></canvas>
          </div>
          
          <div class="chart-grid">
            <div>
              <h3>Doughnut Chart</h3>
              <div class="chart-container small">
                <canvas baseChart [data]="doughnutChartData" [options]="pieChartOptions" [type]="'doughnut'"></canvas>
              </div>
            </div>
            <div>
              <h3>Pie Chart</h3>
              <div class="chart-container small">
                <canvas baseChart [data]="pieChartData" [options]="pieChartOptions" [type]="'pie'"></canvas>
              </div>
            </div>
          </div>
          
          <h3>Polar Area Chart</h3>
          <div class="chart-container small">
            <canvas baseChart [data]="polarChartData" [options]="pieChartOptions" [type]="'polarArea'"></canvas>
          </div>
          
          <h3>Radar Chart</h3>
          <div class="chart-container">
            <canvas baseChart [data]="radarChartData" [options]="radarChartOptions" [type]="'radar'"></canvas>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    h3 { margin: 24px 0 16px; }
    .chart-container { height: 300px; margin-bottom: 24px; }
    .chart-container.small { height: 250px; max-width: 400px; }
    .chart-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
    @media (max-width: 768px) { .chart-grid { grid-template-columns: 1fr; } }
  `]
})
export class ChartsComponent {
  lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: true } }
  };
  
  barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: true } }
  };
  
  pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: true, position: 'right' } }
  };
  
  radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false
  };
  
  lineChartData: ChartData<'line'> = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', borderColor: '#1976d2', backgroundColor: 'rgba(25, 118, 210, 0.1)', fill: true },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', borderColor: '#ff4081', backgroundColor: 'transparent' }
    ]
  };
  
  barChartData: ChartData<'bar'> = {
    labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55], label: 'Series A', backgroundColor: '#1976d2' },
      { data: [28, 48, 40, 19, 86, 27], label: 'Series B', backgroundColor: '#ff4081' }
    ]
  };
  
  doughnutChartData: ChartData<'doughnut'> = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [{ data: [300, 50, 100], backgroundColor: ['#f44336', '#2196f3', '#ffeb3b'] }]
  };
  
  pieChartData: ChartData<'pie'> = {
    labels: ['Red', 'Blue', 'Yellow', 'Green'],
    datasets: [{ data: [300, 50, 100, 80], backgroundColor: ['#f44336', '#2196f3', '#ffeb3b', '#4caf50'] }]
  };
  
  polarChartData: ChartData<'polarArea'> = {
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    datasets: [{ data: [11, 16, 7, 3, 14], backgroundColor: ['#f44336', '#4caf50', '#ffeb3b', '#9e9e9e', '#2196f3'] }]
  };
  
  radarChartData: ChartData<'radar'> = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
      { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A', borderColor: '#1976d2', backgroundColor: 'rgba(25, 118, 210, 0.2)' },
      { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B', borderColor: '#ff4081', backgroundColor: 'rgba(255, 64, 129, 0.2)' }
    ]
  };
}
