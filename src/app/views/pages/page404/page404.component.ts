import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-page404',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule],
  template: `
    <div class="error-page">
      <div class="error-content">
        <h1 class="error-code">404</h1>
        <h2>Oops! Page not found.</h2>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <div class="error-actions">
          <button mat-raised-button color="primary" routerLink="/dashboard">
            <mat-icon>home</mat-icon>
            Go to Dashboard
          </button>
          <button mat-stroked-button color="primary" (click)="goBack()">
            <mat-icon>arrow_back</mat-icon>
            Go Back
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .error-page { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); padding: 24px; }
    .error-content { text-align: center; max-width: 500px; }
    .error-code { font-size: 120px; font-weight: 700; color: #1976d2; margin: 0; line-height: 1; }
    h2 { font-size: 28px; margin: 16px 0; color: #333; }
    p { color: rgba(0,0,0,0.6); margin-bottom: 32px; }
    .error-actions { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
    .error-actions button { display: flex; align-items: center; gap: 8px; }
  `]
})
export class Page404Component {
  goBack() { window.history.back(); }
}
