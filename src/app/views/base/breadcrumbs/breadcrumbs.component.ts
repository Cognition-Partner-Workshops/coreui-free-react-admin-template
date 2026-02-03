import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Breadcrumbs</mat-card-title></mat-card-header>
      <mat-card-content>
        <p>Indicate the current page's location within a navigational hierarchy.</p>
        <h3>Basic Breadcrumb</h3>
        <nav class="breadcrumb">
          <a href="#">Home</a>
          <mat-icon>chevron_right</mat-icon>
          <span>Library</span>
        </nav>
        <h3>With Multiple Levels</h3>
        <nav class="breadcrumb">
          <a href="#">Home</a>
          <mat-icon>chevron_right</mat-icon>
          <a href="#">Library</a>
          <mat-icon>chevron_right</mat-icon>
          <a href="#">Data</a>
          <mat-icon>chevron_right</mat-icon>
          <span>Current Page</span>
        </nav>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    h3 { margin: 24px 0 16px; }
    .breadcrumb { display: flex; align-items: center; gap: 4px; padding: 12px; background: #f5f5f5; border-radius: 4px; margin-bottom: 16px; }
    .breadcrumb a { color: #1976d2; text-decoration: none; }
    .breadcrumb a:hover { text-decoration: underline; }
    .breadcrumb span { color: rgba(0,0,0,0.6); }
    .breadcrumb mat-icon { font-size: 18px; width: 18px; height: 18px; color: rgba(0,0,0,0.4); }
  `]
})
export class BreadcrumbsComponent {}
