import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-validation',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Validation</mat-card-title></mat-card-header>
      <mat-card-content>
        <p>Provide valuable, actionable feedback to your users with form validation.</p>
        <h3>Validation Example</h3>
        <form [formGroup]="form" (ngSubmit)="onSubmit()">
          <mat-form-field appearance="outline" class="full-width">
            <mat-label>Email</mat-label>
            <input matInput formControlName="email">
            <mat-error *ngIf="form.get('email')?.hasError('required')">Email is required</mat-error>
            <mat-error *ngIf="form.get('email')?.hasError('email')">Please enter a valid email</mat-error>
          </mat-form-field>
          <mat-form-field appearance="outline" class="full-width">
            <mat-label>Password</mat-label>
            <input matInput type="password" formControlName="password">
            <mat-error *ngIf="form.get('password')?.hasError('required')">Password is required</mat-error>
            <mat-error *ngIf="form.get('password')?.hasError('minlength')">Password must be at least 8 characters</mat-error>
          </mat-form-field>
          <mat-form-field appearance="outline" class="full-width">
            <mat-label>Username</mat-label>
            <input matInput formControlName="username">
            <mat-hint>3-20 characters</mat-hint>
            <mat-error *ngIf="form.get('username')?.hasError('required')">Username is required</mat-error>
            <mat-error *ngIf="form.get('username')?.hasError('minlength')">Username must be at least 3 characters</mat-error>
            <mat-error *ngIf="form.get('username')?.hasError('maxlength')">Username cannot exceed 20 characters</mat-error>
          </mat-form-field>
          <button mat-raised-button color="primary" type="submit" [disabled]="form.invalid">Submit</button>
        </form>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`h3 { margin: 24px 0 16px; } .full-width { width: 100%; } button { margin-top: 16px; }`]
})
export class ValidationComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)])
  });
  onSubmit() { if (this.form.valid) console.log('Form submitted:', this.form.value); }
}
