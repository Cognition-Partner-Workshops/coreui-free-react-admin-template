import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checks-radios',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatCheckboxModule, MatRadioModule, FormsModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Checks & Radios</mat-card-title></mat-card-header>
      <mat-card-content>
        <h3>Checkboxes</h3>
        <div class="checkbox-group">
          <mat-checkbox>Default checkbox</mat-checkbox>
          <mat-checkbox checked>Checked checkbox</mat-checkbox>
          <mat-checkbox disabled>Disabled checkbox</mat-checkbox>
          <mat-checkbox indeterminate>Indeterminate</mat-checkbox>
        </div>
        <h3>Radio Buttons</h3>
        <mat-radio-group [(ngModel)]="selectedOption">
          <mat-radio-button value="1">Option 1</mat-radio-button>
          <mat-radio-button value="2">Option 2</mat-radio-button>
          <mat-radio-button value="3">Option 3</mat-radio-button>
          <mat-radio-button value="4" disabled>Disabled</mat-radio-button>
        </mat-radio-group>
        <h3>Colored Checkboxes</h3>
        <div class="checkbox-group">
          <mat-checkbox color="primary">Primary</mat-checkbox>
          <mat-checkbox color="accent">Accent</mat-checkbox>
          <mat-checkbox color="warn">Warn</mat-checkbox>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`h3 { margin: 24px 0 16px; } .checkbox-group { display: flex; flex-direction: column; gap: 8px; } mat-radio-group { display: flex; flex-direction: column; gap: 8px; }`]
})
export class ChecksRadiosComponent { selectedOption = '1'; }
