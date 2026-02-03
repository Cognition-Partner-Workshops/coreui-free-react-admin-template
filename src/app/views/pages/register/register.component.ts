import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, FormsModule],
  template: `
    <div class="register-page">
      <mat-card class="register-card">
        <mat-card-header>
          <mat-card-title>Register</mat-card-title>
          <mat-card-subtitle>Create your account</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <form>
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Username</mat-label>
              <mat-icon matPrefix>person</mat-icon>
              <input matInput placeholder="Username" [(ngModel)]="username" name="username">
            </mat-form-field>
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Email</mat-label>
              <mat-icon matPrefix>email</mat-icon>
              <input matInput type="email" placeholder="Email" [(ngModel)]="email" name="email">
            </mat-form-field>
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Password</mat-label>
              <mat-icon matPrefix>lock</mat-icon>
              <input matInput [type]="hidePassword ? 'password' : 'text'" placeholder="Password" [(ngModel)]="password" name="password">
              <button mat-icon-button matSuffix (click)="hidePassword = !hidePassword" type="button">
                <mat-icon>{{hidePassword ? 'visibility_off' : 'visibility'}}</mat-icon>
              </button>
            </mat-form-field>
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Repeat Password</mat-label>
              <mat-icon matPrefix>lock</mat-icon>
              <input matInput [type]="hidePassword ? 'password' : 'text'" placeholder="Repeat Password" [(ngModel)]="repeatPassword" name="repeatPassword">
            </mat-form-field>
            <button mat-raised-button color="accent" class="full-width register-btn" routerLink="/dashboard">Create Account</button>
            <div class="login-link">
              <span>Already have an account?</span>
              <a routerLink="/login">Sign in</a>
            </div>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .register-page { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); padding: 24px; }
    .register-card { width: 100%; max-width: 450px; }
    .full-width { width: 100%; }
    .register-btn { padding: 12px; font-size: 16px; margin-bottom: 16px; }
    .login-link { text-align: center; color: rgba(0,0,0,0.6); }
    .login-link a { color: #1976d2; text-decoration: none; margin-left: 4px; }
    .login-link a:hover { text-decoration: underline; }
  `]
})
export class RegisterComponent {
  username = '';
  email = '';
  password = '';
  repeatPassword = '';
  hidePassword = true;
}
