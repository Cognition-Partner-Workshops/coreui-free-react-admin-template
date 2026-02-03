import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-page500',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule],
  template: `
    <div class="error-page">
      <div class="error-content">
        <h1 class="error-code">500</h1>
        <h2>Houston, we have a problem!</h2>
        <p>The server encountered an internal error and was unable to complete your request. Please try again later.</p>
        <div class="error-actions">
          <button mat-raised-button color="primary" routerLink="/dashboard">
            <mat-icon>home</mat-icon>
            Go to Dashboard
          </button>
          <button mat-stroked-button color="primary" (click)="reload()">
            <mat-icon>refresh</mat-icon>
            Try Again
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .error-page { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%); padding: 24px; }
    .error-content { text-align: center; max-width: 500px; }
    .error-code { font-size: 120px; font-weight: 700; color: #e55353; margin: 0; line-height: 1; }
    h2 { font-size: 28px; margin: 16px 0; color: #333; }
    p { color: rgba(0,0,0,0.6); margin-bottom: 32px; }
    .error-actions { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
    .error-actions button { display: flex; align-items: center; gap: 8px; }
  `]
})
export class Page500Component {
  reload() { window.location.reload(); }
}
