import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCheckboxModule, FormsModule],
  template: `
    <div class="login-page">
      <mat-card class="login-card">
        <mat-card-header>
          <mat-card-title>Login</mat-card-title>
          <mat-card-subtitle>Sign In to your account</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <form>
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Username</mat-label>
              <mat-icon matPrefix>person</mat-icon>
              <input matInput placeholder="Username" [(ngModel)]="username" name="username">
            </mat-form-field>
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Password</mat-label>
              <mat-icon matPrefix>lock</mat-icon>
              <input matInput [type]="hidePassword ? 'password' : 'text'" placeholder="Password" [(ngModel)]="password" name="password">
              <button mat-icon-button matSuffix (click)="hidePassword = !hidePassword" type="button">
                <mat-icon>{{hidePassword ? 'visibility_off' : 'visibility'}}</mat-icon>
              </button>
            </mat-form-field>
            <div class="form-options">
              <mat-checkbox>Remember me</mat-checkbox>
              <a href="#" class="forgot-link">Forgot password?</a>
            </div>
            <button mat-raised-button color="primary" class="full-width login-btn" routerLink="/dashboard">Login</button>
          </form>
        </mat-card-content>
      </mat-card>
      <mat-card class="register-card">
        <mat-card-content>
          <h3>Sign up</h3>
          <p>Don't have an account? Create one now to get started.</p>
          <button mat-raised-button color="accent" routerLink="/register" class="full-width">Register Now!</button>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .login-page { min-height: 100vh; display: flex; align-items: center; justify-content: center; gap: 24px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 24px; flex-wrap: wrap; }
    .login-card { width: 100%; max-width: 400px; }
    .register-card { width: 100%; max-width: 400px; background: rgba(255,255,255,0.9); }
    .register-card h3 { margin: 0 0 8px; }
    .register-card p { color: rgba(0,0,0,0.6); margin-bottom: 16px; }
    .full-width { width: 100%; }
    .form-options { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
    .forgot-link { color: #1976d2; text-decoration: none; font-size: 14px; }
    .forgot-link:hover { text-decoration: underline; }
    .login-btn { padding: 12px; font-size: 16px; }
  `]
})
export class LoginComponent {
  username = '';
  password = '';
  hidePassword = true;
}
