import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData } from 'chart.js';

interface ProgressItem {
  title: string;
  value: string;
  percent: number;
  color: string;
}

interface TableItem {
  avatar: string;
  name: string;
  status: string;
  country: string;
  countryFlag: string;
  usage: number;
  usageColor: string;
  period: string;
  payment: string;
  paymentIcon: string;
  activity: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatProgressBarModule,
    MatButtonToggleModule,
    MatChipsModule,
    BaseChartDirective
  ],
  template: `
    <div class="dashboard">
      <!-- Stats Cards -->
      <div class="stats-row">
        <mat-card class="stat-card primary">
          <mat-card-content>
            <div class="stat-content">
              <div class="stat-info">
                <div class="stat-value">26K</div>
                <div class="stat-label">Users</div>
              </div>
              <mat-icon class="stat-icon">people</mat-icon>
            </div>
            <div class="stat-chart">
              <canvas baseChart
                [data]="usersChartData"
                [options]="miniChartOptions"
                [type]="'line'">
              </canvas>
            </div>
          </mat-card-content>
        </mat-card>
        
        <mat-card class="stat-card info">
          <mat-card-content>
            <div class="stat-content">
              <div class="stat-info">
                <div class="stat-value">$6,200</div>
                <div class="stat-label">Income</div>
              </div>
              <mat-icon class="stat-icon">attach_money</mat-icon>
            </div>
            <div class="stat-chart">
              <canvas baseChart
                [data]="incomeChartData"
                [options]="miniChartOptions"
                [type]="'line'">
              </canvas>
            </div>
          </mat-card-content>
        </mat-card>
        
        <mat-card class="stat-card warning">
          <mat-card-content>
            <div class="stat-content">
              <div class="stat-info">
                <div class="stat-value">2.49%</div>
                <div class="stat-label">Conversion Rate</div>
              </div>
              <mat-icon class="stat-icon">trending_up</mat-icon>
            </div>
            <div class="stat-chart">
              <canvas baseChart
                [data]="conversionChartData"
                [options]="miniChartOptions"
                [type]="'line'">
              </canvas>
            </div>
          </mat-card-content>
        </mat-card>
        
        <mat-card class="stat-card danger">
          <mat-card-content>
            <div class="stat-content">
              <div class="stat-info">
                <div class="stat-value">44K</div>
                <div class="stat-label">Sessions</div>
              </div>
              <mat-icon class="stat-icon">schedule</mat-icon>
            </div>
            <div class="stat-chart">
              <canvas baseChart
                [data]="sessionsChartData"
                [options]="miniChartOptions"
                [type]="'bar'">
              </canvas>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
      
      <!-- Main Traffic Chart -->
      <mat-card class="traffic-card">
        <mat-card-header>
          <mat-card-title>
            <div class="traffic-header">
              <div>
                <h4>Traffic</h4>
                <span class="text-muted">January - July 2024</span>
              </div>
              <div class="traffic-actions">
                <mat-button-toggle-group value="Month">
                  <mat-button-toggle value="Day">Day</mat-button-toggle>
                  <mat-button-toggle value="Month">Month</mat-button-toggle>
                  <mat-button-toggle value="Year">Year</mat-button-toggle>
                </mat-button-toggle-group>
                <button mat-icon-button color="primary">
                  <mat-icon>cloud_download</mat-icon>
                </button>
              </div>
            </div>
          </mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="main-chart">
            <canvas baseChart
              [data]="mainChartData"
              [options]="mainChartOptions"
              [type]="'line'">
            </canvas>
          </div>
          
          <div class="progress-stats">
            @for (item of progressItems; track item.title) {
              <div class="progress-item">
                <div class="progress-label">{{ item.title }}</div>
                <div class="progress-value">{{ item.value }} ({{ item.percent }}%)</div>
                <mat-progress-bar [mode]="'determinate'" [value]="item.percent" [color]="item.color"></mat-progress-bar>
              </div>
            }
          </div>
        </mat-card-content>
      </mat-card>
      
      <!-- Brand Cards -->
      <div class="brand-cards">
        <mat-card class="brand-card facebook">
          <mat-card-content>
            <div class="brand-header">
              <mat-icon>facebook</mat-icon>
              <div class="brand-stats">
                <span class="brand-value">89k</span>
                <span class="brand-label">friends</span>
              </div>
            </div>
            <div class="brand-chart">
              <canvas baseChart
                [data]="facebookChartData"
                [options]="brandChartOptions"
                [type]="'line'">
              </canvas>
            </div>
          </mat-card-content>
        </mat-card>
        
        <mat-card class="brand-card twitter">
          <mat-card-content>
            <div class="brand-header">
              <mat-icon>flutter_dash</mat-icon>
              <div class="brand-stats">
                <span class="brand-value">973k</span>
                <span class="brand-label">followers</span>
              </div>
            </div>
            <div class="brand-chart">
              <canvas baseChart
                [data]="twitterChartData"
                [options]="brandChartOptions"
                [type]="'line'">
              </canvas>
            </div>
          </mat-card-content>
        </mat-card>
        
        <mat-card class="brand-card linkedin">
          <mat-card-content>
            <div class="brand-header">
              <mat-icon>work</mat-icon>
              <div class="brand-stats">
                <span class="brand-value">500+</span>
                <span class="brand-label">contacts</span>
              </div>
            </div>
            <div class="brand-chart">
              <canvas baseChart
                [data]="linkedinChartData"
                [options]="brandChartOptions"
                [type]="'line'">
              </canvas>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
      
      <!-- Traffic & Sales -->
      <mat-card class="traffic-sales-card">
        <mat-card-header>
          <mat-card-title>Traffic & Sales</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="traffic-sales-grid">
            <div class="traffic-section">
              <div class="metric-row">
                <div class="metric-item info-border">
                  <div class="metric-label">New Clients</div>
                  <div class="metric-value">9,123</div>
                </div>
                <div class="metric-item danger-border">
                  <div class="metric-label">Recurring Clients</div>
                  <div class="metric-value">22,643</div>
                </div>
              </div>
              
              <div class="day-progress">
                @for (day of weekProgress; track day.title) {
                  <div class="day-item">
                    <span class="day-label">{{ day.title }}</span>
                    <div class="day-bars">
                      <mat-progress-bar mode="determinate" [value]="day.value1" color="primary"></mat-progress-bar>
                      <mat-progress-bar mode="determinate" [value]="day.value2" color="warn"></mat-progress-bar>
                    </div>
                  </div>
                }
              </div>
            </div>
            
            <div class="sales-section">
              <div class="metric-row">
                <div class="metric-item warning-border">
                  <div class="metric-label">Pageviews</div>
                  <div class="metric-value">78,623</div>
                </div>
                <div class="metric-item success-border">
                  <div class="metric-label">Organic</div>
                  <div class="metric-value">49,123</div>
                </div>
              </div>
              
              <div class="gender-progress">
                <div class="gender-item">
                  <mat-icon>male</mat-icon>
                  <span>Male</span>
                  <span class="gender-value">53%</span>
                </div>
                <mat-progress-bar mode="determinate" [value]="53" color="accent"></mat-progress-bar>
                
                <div class="gender-item">
                  <mat-icon>female</mat-icon>
                  <span>Female</span>
                  <span class="gender-value">43%</span>
                </div>
                <mat-progress-bar mode="determinate" [value]="43" color="accent"></mat-progress-bar>
              </div>
              
              <div class="source-progress">
                @for (source of trafficSources; track source.title) {
                  <div class="source-item">
                    <mat-icon>{{ source.icon }}</mat-icon>
                    <span>{{ source.title }}</span>
                    <span class="source-value">{{ source.value }} ({{ source.percent }}%)</span>
                  </div>
                  <mat-progress-bar mode="determinate" [value]="source.percent" color="primary"></mat-progress-bar>
                }
              </div>
            </div>
          </div>
          
          <!-- Users Table -->
          <table mat-table [dataSource]="tableData" class="users-table">
            <ng-container matColumnDef="user">
              <th mat-header-cell *matHeaderCellDef>User</th>
              <td mat-cell *matCellDef="let element">
                <div class="user-cell">
                  <div class="avatar" [class]="element.status">
                    <mat-icon>account_circle</mat-icon>
                  </div>
                  <div class="user-info">
                    <div class="user-name">{{ element.name }}</div>
                    <div class="user-meta">New | Registered: Jan 1, 2024</div>
                  </div>
                </div>
              </td>
            </ng-container>
            
            <ng-container matColumnDef="country">
              <th mat-header-cell *matHeaderCellDef>Country</th>
              <td mat-cell *matCellDef="let element">{{ element.country }}</td>
            </ng-container>
            
            <ng-container matColumnDef="usage">
              <th mat-header-cell *matHeaderCellDef>Usage</th>
              <td mat-cell *matCellDef="let element">
                <div class="usage-cell">
                  <div class="usage-header">
                    <span>{{ element.usage }}%</span>
                    <span class="usage-period">{{ element.period }}</span>
                  </div>
                  <mat-progress-bar mode="determinate" [value]="element.usage" [color]="element.usageColor"></mat-progress-bar>
                </div>
              </td>
            </ng-container>
            
            <ng-container matColumnDef="payment">
              <th mat-header-cell *matHeaderCellDef>Payment Method</th>
              <td mat-cell *matCellDef="let element">
                <mat-icon>{{ element.paymentIcon }}</mat-icon>
              </td>
            </ng-container>
            
            <ng-container matColumnDef="activity">
              <th mat-header-cell *matHeaderCellDef>Activity</th>
              <td mat-cell *matCellDef="let element">
                <div class="activity-cell">
                  <div class="activity-label">Last login</div>
                  <div class="activity-value">{{ element.activity }}</div>
                </div>
              </td>
            </ng-container>
            
            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
          </table>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .dashboard {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    
    .stats-row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
    }
    
    @media (max-width: 1200px) {
      .stats-row {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (max-width: 600px) {
      .stats-row {
        grid-template-columns: 1fr;
      }
    }
    
    .stat-card {
      color: white;
    }
    
    .stat-card.primary { background: linear-gradient(45deg, #321fdb, #1f1498); }
    .stat-card.info { background: linear-gradient(45deg, #39f, #1f7bc9); }
    .stat-card.warning { background: linear-gradient(45deg, #f9b115, #c98c0f); }
    .stat-card.danger { background: linear-gradient(45deg, #e55353, #b83c3c); }
    
    .stat-content {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 16px;
    }
    
    .stat-value {
      font-size: 28px;
      font-weight: 600;
    }
    
    .stat-label {
      font-size: 14px;
      opacity: 0.8;
    }
    
    .stat-icon {
      font-size: 48px;
      width: 48px;
      height: 48px;
      opacity: 0.3;
    }
    
    .stat-chart {
      height: 70px;
    }
    
    .traffic-card {
      padding: 16px;
    }
    
    .traffic-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    
    .traffic-header h4 {
      margin: 0;
      font-size: 18px;
    }
    
    .text-muted {
      color: rgba(0, 0, 0, 0.54);
      font-size: 12px;
    }
    
    .traffic-actions {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    
    .main-chart {
      height: 300px;
      margin: 24px 0;
    }
    
    .progress-stats {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 24px;
      text-align: center;
    }
    
    @media (max-width: 1200px) {
      .progress-stats {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    
    @media (max-width: 600px) {
      .progress-stats {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    .progress-item {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    
    .progress-label {
      color: rgba(0, 0, 0, 0.54);
      font-size: 12px;
    }
    
    .progress-value {
      font-weight: 500;
      font-size: 14px;
    }
    
    .brand-cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }
    
    @media (max-width: 900px) {
      .brand-cards {
        grid-template-columns: 1fr;
      }
    }
    
    .brand-card {
      color: white;
    }
    
    .brand-card.facebook { background: #3b5998; }
    .brand-card.twitter { background: #00aced; }
    .brand-card.linkedin { background: #4875b4; }
    
    .brand-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
    }
    
    .brand-header mat-icon {
      font-size: 36px;
      width: 36px;
      height: 36px;
    }
    
    .brand-stats {
      text-align: right;
    }
    
    .brand-value {
      display: block;
      font-size: 24px;
      font-weight: 600;
    }
    
    .brand-label {
      font-size: 12px;
      opacity: 0.8;
    }
    
    .brand-chart {
      height: 70px;
      padding: 0 16px 16px;
    }
    
    .traffic-sales-card {
      padding: 16px;
    }
    
    .traffic-sales-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
      margin-bottom: 24px;
    }
    
    @media (max-width: 900px) {
      .traffic-sales-grid {
        grid-template-columns: 1fr;
      }
    }
    
    .metric-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-bottom: 24px;
    }
    
    .metric-item {
      padding: 12px 16px;
      border-left: 4px solid;
    }
    
    .metric-item.info-border { border-color: #39f; }
    .metric-item.danger-border { border-color: #e55353; }
    .metric-item.warning-border { border-color: #f9b115; }
    .metric-item.success-border { border-color: #2eb85c; }
    
    .metric-label {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.54);
    }
    
    .metric-value {
      font-size: 20px;
      font-weight: 600;
    }
    
    .day-progress, .gender-progress, .source-progress {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    
    .day-item {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    
    .day-label {
      width: 80px;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.54);
    }
    
    .day-bars {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    
    .gender-item, .source-item {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
    }
    
    .gender-value, .source-value {
      margin-left: auto;
      font-weight: 500;
    }
    
    .users-table {
      width: 100%;
    }
    
    .user-cell {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    
    .avatar::after {
      content: '';
      position: absolute;
      bottom: 2px;
      right: 2px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 2px solid white;
    }
    
    .avatar.success::after { background: #2eb85c; }
    .avatar.danger::after { background: #e55353; }
    .avatar.warning::after { background: #f9b115; }
    
    .user-name {
      font-weight: 500;
    }
    
    .user-meta {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.54);
    }
    
    .usage-cell {
      min-width: 200px;
    }
    
    .usage-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 4px;
    }
    
    .usage-period {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.54);
    }
    
    .activity-label {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.54);
    }
    
    .activity-value {
      font-weight: 500;
    }
  `]
})
export class DashboardComponent {
  displayedColumns = ['user', 'country', 'usage', 'payment', 'activity'];
  
  progressItems: ProgressItem[] = [
    { title: 'Visits', value: '29,703 Users', percent: 40, color: 'primary' },
    { title: 'Unique', value: '24,093 Users', percent: 20, color: 'accent' },
    { title: 'Pageviews', value: '78,706 Views', percent: 60, color: 'warn' },
    { title: 'New Users', value: '22,123 Users', percent: 80, color: 'warn' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40, color: 'primary' }
  ];
  
  weekProgress = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 }
  ];
  
  trafficSources = [
    { title: 'Organic Search', icon: 'search', percent: 56, value: '191,235' },
    { title: 'Facebook', icon: 'facebook', percent: 15, value: '51,223' },
    { title: 'Twitter', icon: 'flutter_dash', percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: 'work', percent: 8, value: '27,319' }
  ];
  
  tableData: TableItem[] = [
    { avatar: '', name: 'Yiorgos Avraamu', status: 'success', country: 'USA', countryFlag: 'us', usage: 50, usageColor: 'primary', period: 'Jun 11, 2024 - Jul 10, 2024', payment: 'Mastercard', paymentIcon: 'credit_card', activity: '10 sec ago' },
    { avatar: '', name: 'Avram Tarasios', status: 'danger', country: 'Brazil', countryFlag: 'br', usage: 22, usageColor: 'accent', period: 'Jun 11, 2024 - Jul 10, 2024', payment: 'Visa', paymentIcon: 'credit_card', activity: '5 minutes ago' },
    { avatar: '', name: 'Quintin Ed', status: 'warning', country: 'India', countryFlag: 'in', usage: 74, usageColor: 'warn', period: 'Jun 11, 2024 - Jul 10, 2024', payment: 'Stripe', paymentIcon: 'payment', activity: '1 hour ago' },
    { avatar: '', name: 'Enéas Kwadwo', status: 'success', country: 'France', countryFlag: 'fr', usage: 98, usageColor: 'warn', period: 'Jun 11, 2024 - Jul 10, 2024', payment: 'PayPal', paymentIcon: 'account_balance_wallet', activity: 'Last month' },
    { avatar: '', name: 'Agapetus Tadeáš', status: 'success', country: 'Spain', countryFlag: 'es', usage: 22, usageColor: 'primary', period: 'Jun 11, 2024 - Jul 10, 2024', payment: 'Google Wallet', paymentIcon: 'account_balance_wallet', activity: 'Last week' },
    { avatar: '', name: 'Friderik Dávid', status: 'danger', country: 'Poland', countryFlag: 'pl', usage: 43, usageColor: 'primary', period: 'Jun 11, 2024 - Jul 10, 2024', payment: 'Amex', paymentIcon: 'credit_card', activity: 'Last week' }
  ];
  
  miniChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { display: false },
      y: { display: false }
    },
    elements: {
      line: { tension: 0.4, borderWidth: 2 },
      point: { radius: 0 }
    }
  };
  
  mainChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: 'top' }
    },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true }
    },
    elements: {
      line: { tension: 0.4 },
      point: { radius: 4 }
    }
  };
  
  brandChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { display: false },
      y: { display: false }
    },
    elements: {
      line: { tension: 0.4, borderWidth: 2, fill: true },
      point: { radius: 0 }
    }
  };
  
  usersChartData: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [{
      data: [65, 59, 84, 84, 51, 55, 40],
      borderColor: 'rgba(255,255,255,0.55)',
      backgroundColor: 'transparent'
    }]
  };
  
  incomeChartData: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [{
      data: [1, 18, 9, 17, 34, 22, 11],
      borderColor: 'rgba(255,255,255,0.55)',
      backgroundColor: 'transparent'
    }]
  };
  
  conversionChartData: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [{
      data: [78, 81, 80, 45, 34, 12, 40],
      borderColor: 'rgba(255,255,255,0.55)',
      backgroundColor: 'transparent'
    }]
  };
  
  sessionsChartData: ChartData<'bar'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [{
      data: [78, 81, 80, 45, 34, 12, 40],
      backgroundColor: 'rgba(255,255,255,0.3)'
    }]
  };
  
  mainChartData: ChartData<'line'> = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        data: [65, 59, 84, 84, 51, 55, 40],
        borderColor: '#321fdb',
        backgroundColor: 'rgba(50, 31, 219, 0.1)',
        fill: true
      },
      {
        label: 'My Second dataset',
        data: [1, 18, 9, 17, 34, 22, 11],
        borderColor: '#39f',
        backgroundColor: 'transparent'
      },
      {
        label: 'My Third dataset',
        data: [78, 81, 80, 45, 34, 12, 40],
        borderColor: '#e55353',
        backgroundColor: 'transparent'
      }
    ]
  };
  
  facebookChartData: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [{
      data: [65, 59, 84, 84, 51, 55, 40],
      borderColor: 'rgba(255,255,255,0.55)',
      backgroundColor: 'rgba(255,255,255,0.1)',
      fill: true
    }]
  };
  
  twitterChartData: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [{
      data: [1, 13, 9, 17, 34, 41, 38],
      borderColor: 'rgba(255,255,255,0.55)',
      backgroundColor: 'rgba(255,255,255,0.1)',
      fill: true
    }]
  };
  
  linkedinChartData: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [{
      data: [78, 81, 80, 45, 34, 12, 40],
      borderColor: 'rgba(255,255,255,0.55)',
      backgroundColor: 'rgba(255,255,255,0.1)',
      fill: true
    }]
  };
}
