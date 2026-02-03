import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-floating-labels',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Floating Labels</mat-card-title></mat-card-header>
      <mat-card-content>
        <p>Create beautifully simple form labels that float over your input fields.</p>
        <h3>Basic Examples</h3>
        <div class="form-grid">
          <mat-form-field appearance="fill">
            <mat-label>Email address</mat-label>
            <input matInput placeholder="name@example.com">
          </mat-form-field>
          <mat-form-field appearance="fill">
            <mat-label>Password</mat-label>
            <input matInput type="password">
          </mat-form-field>
        </div>
        <h3>Outline Appearance</h3>
        <div class="form-grid">
          <mat-form-field appearance="outline">
            <mat-label>First Name</mat-label>
            <input matInput>
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Last Name</mat-label>
            <input matInput>
          </mat-form-field>
        </div>
        <h3>With Select</h3>
        <mat-form-field appearance="outline">
          <mat-label>Select an option</mat-label>
          <mat-select>
            <mat-option value="1">Option 1</mat-option>
            <mat-option value="2">Option 2</mat-option>
            <mat-option value="3">Option 3</mat-option>
          </mat-select>
        </mat-form-field>
        <h3>Textarea</h3>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Comments</mat-label>
          <textarea matInput rows="4"></textarea>
        </mat-form-field>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`h3 { margin: 24px 0 16px; } .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; } .full-width { width: 100%; } @media (max-width: 600px) { .form-grid { grid-template-columns: 1fr; } }`]
})
export class FloatingLabelsComponent {}
