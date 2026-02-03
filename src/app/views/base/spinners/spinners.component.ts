import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-spinners',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatProgressSpinnerModule, MatButtonModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Spinners</mat-card-title></mat-card-header>
      <mat-card-content>
        <p>Spinners indicate loading state of a component or page.</p>
        <h3>Basic Spinners</h3>
        <div class="spinner-row">
          <mat-spinner diameter="30"></mat-spinner>
          <mat-spinner diameter="40"></mat-spinner>
          <mat-spinner diameter="50"></mat-spinner>
          <mat-spinner diameter="60"></mat-spinner>
        </div>
        <h3>Colored Spinners</h3>
        <div class="spinner-row">
          <mat-spinner diameter="40" color="primary"></mat-spinner>
          <mat-spinner diameter="40" color="accent"></mat-spinner>
          <mat-spinner diameter="40" color="warn"></mat-spinner>
        </div>
        <h3>Determinate Spinners</h3>
        <div class="spinner-row">
          <mat-progress-spinner mode="determinate" value="25" diameter="50"></mat-progress-spinner>
          <mat-progress-spinner mode="determinate" value="50" diameter="50"></mat-progress-spinner>
          <mat-progress-spinner mode="determinate" value="75" diameter="50"></mat-progress-spinner>
          <mat-progress-spinner mode="determinate" value="100" diameter="50"></mat-progress-spinner>
        </div>
        <h3>Button with Spinner</h3>
        <button mat-raised-button color="primary" disabled><mat-spinner diameter="20" class="button-spinner"></mat-spinner>Loading...</button>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    h3 { margin: 24px 0 16px; }
    .spinner-row { display: flex; gap: 24px; align-items: center; margin-bottom: 16px; }
    .button-spinner { display: inline-block; margin-right: 8px; }
    ::ng-deep .button-spinner circle { stroke: white !important; }
  `]
})
export class SpinnersComponent {}
