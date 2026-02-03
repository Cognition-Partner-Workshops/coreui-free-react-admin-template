import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-widgets',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatProgressBarModule, BaseChartDirective],
  template: `
    <div class="widgets-page">
      <h2>Widgets</h2>
      
      <div class="widgets-grid">
        @for (widget of statsWidgets; track widget.title) {
          <mat-card class="stat-widget" [style.border-left-color]="widget.color">
            <mat-card-content>
              <div class="widget-value">{{ widget.value }}</div>
              <div class="widget-title">{{ widget.title }}</div>
              <mat-icon [style.color]="widget.color">{{ widget.icon }}</mat-icon>
            </mat-card-content>
          </mat-card>
        }
      </div>
      
      <h3>Progress Widgets</h3>
      <div class="progress-widgets">
        @for (widget of progressWidgets; track widget.title) {
          <mat-card class="progress-widget">
            <mat-card-content>
              <div class="progress-header">
                <span>{{ widget.title }}</span>
                <span>{{ widget.value }}%</span>
              </div>
              <mat-progress-bar mode="determinate" [value]="widget.value" [color]="widget.color"></mat-progress-bar>
            </mat-card-content>
          </mat-card>
        }
      </div>
      
      <h3>Chart Widgets</h3>
      <div class="chart-widgets">
        <mat-card class="chart-widget primary">
          <mat-card-content>
            <div class="chart-header">
              <div class="chart-value">9,823</div>
              <div class="chart-label">Members online</div>
            </div>
            <div class="mini-chart">
              <canvas baseChart [data]="lineChartData1" [options]="miniChartOptions" [type]="'line'"></canvas>
            </div>
          </mat-card-content>
        </mat-card>
        
        <mat-card class="chart-widget info">
          <mat-card-content>
            <div class="chart-header">
              <div class="chart-value">$9,823</div>
              <div class="chart-label">Revenue</div>
            </div>
            <div class="mini-chart">
              <canvas baseChart [data]="lineChartData2" [options]="miniChartOptions" [type]="'line'"></canvas>
            </div>
          </mat-card-content>
        </mat-card>
        
        <mat-card class="chart-widget warning">
          <mat-card-content>
            <div class="chart-header">
              <div class="chart-value">22,643</div>
              <div class="chart-label">Active Users</div>
            </div>
            <div class="mini-chart">
              <canvas baseChart [data]="barChartData" [options]="miniChartOptions" [type]="'bar'"></canvas>
            </div>
          </mat-card-content>
        </mat-card>
        
        <mat-card class="chart-widget danger">
          <mat-card-content>
            <div class="chart-header">
              <div class="chart-value">78,623</div>
              <div class="chart-label">Page Views</div>
            </div>
            <div class="mini-chart">
              <canvas baseChart [data]="lineChartData3" [options]="miniChartOptions" [type]="'line'"></canvas>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
      
      <h3>Info Widgets</h3>
      <div class="info-widgets">
        @for (widget of infoWidgets; track widget.title) {
          <mat-card class="info-widget">
            <mat-card-content>
              <mat-icon [style.color]="widget.color">{{ widget.icon }}</mat-icon>
              <div class="info-content">
                <div class="info-value">{{ widget.value }}</div>
                <div class="info-title">{{ widget.title }}</div>
              </div>
            </mat-card-content>
          </mat-card>
        }
      </div>
    </div>
  `,
  styles: [`
    h2, h3 { margin: 0 0 24px; }
    h3 { margin-top: 32px; }
    .widgets-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
    .stat-widget { border-left: 4px solid; }
    .stat-widget mat-card-content { display: flex; flex-direction: column; position: relative; }
    .stat-widget mat-icon { position: absolute; right: 16px; top: 50%; transform: translateY(-50%); font-size: 48px; width: 48px; height: 48px; opacity: 0.3; }
    .widget-value { font-size: 28px; font-weight: 600; }
    .widget-title { color: rgba(0,0,0,0.54); font-size: 14px; text-transform: uppercase; }
    .progress-widgets { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
    .progress-header { display: flex; justify-content: space-between; margin-bottom: 8px; font-weight: 500; }
    .chart-widgets { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
    .chart-widget { color: white; }
    .chart-widget.primary { background: linear-gradient(45deg, #321fdb, #1f1498); }
    .chart-widget.info { background: linear-gradient(45deg, #39f, #1f7bc9); }
    .chart-widget.warning { background: linear-gradient(45deg, #f9b115, #c98c0f); }
    .chart-widget.danger { background: linear-gradient(45deg, #e55353, #b83c3c); }
    .chart-header { margin-bottom: 16px; }
    .chart-value { font-size: 24px; font-weight: 600; }
    .chart-label { font-size: 12px; opacity: 0.8; }
    .mini-chart { height: 70px; }
    .info-widgets { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
    .info-widget mat-card-content { display: flex; align-items: center; gap: 16px; }
    .info-widget mat-icon { font-size: 48px; width: 48px; height: 48px; }
    .info-value { font-size: 24px; font-weight: 600; }
    .info-title { color: rgba(0,0,0,0.54); font-size: 14px; }
    @media (max-width: 1200px) { .widgets-grid, .chart-widgets, .info-widgets { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 600px) { .widgets-grid, .chart-widgets, .info-widgets, .progress-widgets { grid-template-columns: 1fr; } }
  `]
})
export class WidgetsComponent {
  statsWidgets = [
    { title: 'Users', value: '26K', icon: 'people', color: '#1976d2' },
    { title: 'Income', value: '$6,200', icon: 'attach_money', color: '#4caf50' },
    { title: 'Conversion', value: '2.49%', icon: 'trending_up', color: '#ff9800' },
    { title: 'Sessions', value: '44K', icon: 'schedule', color: '#f44336' }
  ];
  
  progressWidgets = [
    { title: 'Visits', value: 75, color: 'primary' },
    { title: 'Unique', value: 50, color: 'accent' },
    { title: 'Pageviews', value: 90, color: 'warn' },
    { title: 'New Users', value: 60, color: 'primary' }
  ];
  
  infoWidgets = [
    { title: 'Comments', value: '1,234', icon: 'chat', color: '#1976d2' },
    { title: 'Shares', value: '567', icon: 'share', color: '#4caf50' },
    { title: 'Likes', value: '8,901', icon: 'favorite', color: '#f44336' },
    { title: 'Downloads', value: '2,345', icon: 'cloud_download', color: '#ff9800' }
  ];
  
  miniChartOptions = { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { display: false }, y: { display: false } }, elements: { line: { tension: 0.4, borderWidth: 2 }, point: { radius: 0 } } };
  
  lineChartData1: ChartData<'line'> = { labels: ['', '', '', '', '', '', ''], datasets: [{ data: [65, 59, 84, 84, 51, 55, 40], borderColor: 'rgba(255,255,255,0.55)', backgroundColor: 'transparent' }] };
  lineChartData2: ChartData<'line'> = { labels: ['', '', '', '', '', '', ''], datasets: [{ data: [1, 18, 9, 17, 34, 22, 11], borderColor: 'rgba(255,255,255,0.55)', backgroundColor: 'transparent' }] };
  lineChartData3: ChartData<'line'> = { labels: ['', '', '', '', '', '', ''], datasets: [{ data: [78, 81, 80, 45, 34, 12, 40], borderColor: 'rgba(255,255,255,0.55)', backgroundColor: 'transparent' }] };
  barChartData: ChartData<'bar'> = { labels: ['', '', '', '', '', '', ''], datasets: [{ data: [78, 81, 80, 45, 34, 12, 40], backgroundColor: 'rgba(255,255,255,0.3)' }] };
}
