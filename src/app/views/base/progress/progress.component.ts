import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatProgressBarModule, MatProgressSpinnerModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Progress</mat-card-title></mat-card-header>
      <mat-card-content>
        <p>Progress indicators express an unspecified wait time or display the length of a process.</p>
        <h3>Progress Bars</h3>
        <div class="progress-section">
          <label>0%</label><mat-progress-bar mode="determinate" value="0"></mat-progress-bar>
          <label>25%</label><mat-progress-bar mode="determinate" value="25"></mat-progress-bar>
          <label>50%</label><mat-progress-bar mode="determinate" value="50"></mat-progress-bar>
          <label>75%</label><mat-progress-bar mode="determinate" value="75"></mat-progress-bar>
          <label>100%</label><mat-progress-bar mode="determinate" value="100"></mat-progress-bar>
        </div>
        <h3>Colored Progress Bars</h3>
        <div class="progress-section">
          <mat-progress-bar mode="determinate" value="25" color="primary"></mat-progress-bar>
          <mat-progress-bar mode="determinate" value="50" color="accent"></mat-progress-bar>
          <mat-progress-bar mode="determinate" value="75" color="warn"></mat-progress-bar>
        </div>
        <h3>Indeterminate Progress</h3>
        <mat-progress-bar mode="indeterminate"></mat-progress-bar>
        <h3>Progress Spinners</h3>
        <div class="spinner-row">
          <mat-spinner diameter="40"></mat-spinner>
          <mat-spinner diameter="60" color="accent"></mat-spinner>
          <mat-spinner diameter="80" color="warn"></mat-spinner>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    h3 { margin: 24px 0 16px; }
    .progress-section { display: flex; flex-direction: column; gap: 16px; }
    .progress-section label { font-size: 12px; color: rgba(0,0,0,0.6); }
    .spinner-row { display: flex; gap: 24px; align-items: center; }
  `]
})
export class ProgressComponent {}
