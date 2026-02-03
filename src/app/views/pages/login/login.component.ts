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
      <div class="card-group">
        <div class="login-card">
          <h1>Login</h1>
          <p class="subtitle">Sign In to your account</p>
          <form>
            <mat-form-field appearance="outline" class="full-width">
              <mat-icon matPrefix>person</mat-icon>
              <input matInput placeholder="Username" [(ngModel)]="username" name="username">
            </mat-form-field>
            <mat-form-field appearance="outline" class="full-width">
              <mat-icon matPrefix>lock</mat-icon>
              <input matInput [type]="hidePassword ? 'password' : 'text'" placeholder="Password" [(ngModel)]="password" name="password">
              <button mat-icon-button matSuffix (click)="hidePassword = !hidePassword" type="button">
                <mat-icon>{{hidePassword ? 'visibility_off' : 'visibility'}}</mat-icon>
              </button>
            </mat-form-field>
            <div class="button-row">
              <button mat-raised-button color="primary" class="login-btn" routerLink="/dashboard">Login</button>
              <a href="#" class="forgot-link">Forgot password?</a>
            </div>
          </form>
        </div>
        <div class="register-card">
          <h2>Sign up</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button mat-stroked-button class="register-btn" routerLink="/register">Register Now!</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .login-page { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #ebedef; padding: 24px; }
    .card-group { display: flex; box-shadow: 0 4px 20px rgba(0,0,0,0.15); border-radius: 4px; overflow: hidden; max-width: 900px; width: 100%; }
    .login-card { flex: 1; background: #fff; padding: 40px; }
    .login-card h1 { margin: 0 0 8px; font-size: 28px; font-weight: 400; color: #3c4b64; }
    .login-card .subtitle { color: #768192; margin-bottom: 24px; }
    .register-card { flex: 1; background: #5856d6; padding: 40px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
    .register-card h2 { color: #fff; margin: 0 0 16px; font-weight: 400; }
    .register-card p { color: rgba(255,255,255,0.8); margin-bottom: 24px; line-height: 1.6; }
    .register-btn { color: #fff !important; border-color: #fff !important; }
    .full-width { width: 100%; }
    .button-row { display: flex; align-items: center; gap: 16px; margin-top: 8px; }
    .login-btn { padding: 8px 24px; }
    .forgot-link { color: #768192; text-decoration: none; font-size: 14px; }
    .forgot-link:hover { text-decoration: underline; }
    @media (max-width: 768px) { .card-group { flex-direction: column; } }
  `]
})
export class LoginComponent {
  username = '';
  password = '';
  hidePassword = true;
}
