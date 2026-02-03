import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatCheckboxModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Form Layout</mat-card-title></mat-card-header>
      <mat-card-content>
        <p>Give your forms some structure with form layout options.</p>
        <h3>Horizontal Form</h3>
        <form class="horizontal-form">
          <div class="form-row">
            <mat-form-field appearance="outline"><mat-label>First Name</mat-label><input matInput></mat-form-field>
            <mat-form-field appearance="outline"><mat-label>Last Name</mat-label><input matInput></mat-form-field>
          </div>
          <mat-form-field appearance="outline" class="full-width"><mat-label>Email</mat-label><input matInput type="email"></mat-form-field>
          <mat-form-field appearance="outline" class="full-width"><mat-label>Address</mat-label><input matInput></mat-form-field>
          <div class="form-row">
            <mat-form-field appearance="outline"><mat-label>City</mat-label><input matInput></mat-form-field>
            <mat-form-field appearance="outline">
              <mat-label>State</mat-label>
              <mat-select><mat-option value="CA">California</mat-option><mat-option value="NY">New York</mat-option><mat-option value="TX">Texas</mat-option></mat-select>
            </mat-form-field>
            <mat-form-field appearance="outline"><mat-label>Zip</mat-label><input matInput></mat-form-field>
          </div>
          <mat-checkbox>Check me out</mat-checkbox>
          <div class="form-actions"><button mat-raised-button color="primary">Submit</button></div>
        </form>
        <h3>Inline Form</h3>
        <form class="inline-form">
          <mat-form-field appearance="outline"><mat-label>Name</mat-label><input matInput></mat-form-field>
          <mat-form-field appearance="outline"><mat-label>Email</mat-label><input matInput></mat-form-field>
          <button mat-raised-button color="primary">Submit</button>
        </form>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    h3 { margin: 24px 0 16px; }
    .form-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 16px; }
    .full-width { width: 100%; }
    .form-actions { margin-top: 16px; }
    .inline-form { display: flex; gap: 16px; align-items: center; flex-wrap: wrap; }
    mat-checkbox { margin: 16px 0; }
  `]
})
export class LayoutComponent {}
