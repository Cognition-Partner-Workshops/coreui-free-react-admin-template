import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-placeholders',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatProgressBarModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Placeholders</mat-card-title></mat-card-header>
      <mat-card-content>
        <p>Use loading placeholders for your components or pages to indicate something may still be loading.</p>
        <h3>Skeleton Loading</h3>
        <div class="skeleton-card">
          <div class="skeleton skeleton-image"></div>
          <div class="skeleton-body">
            <div class="skeleton skeleton-title"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text short"></div>
          </div>
        </div>
        <h3>Progress Indicator</h3>
        <mat-progress-bar mode="indeterminate"></mat-progress-bar>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    h3 { margin: 24px 0 16px; }
    .skeleton-card { max-width: 300px; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; }
    .skeleton { background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%); background-size: 200% 100%; animation: shimmer 1.5s infinite; }
    .skeleton-image { height: 150px; }
    .skeleton-body { padding: 16px; }
    .skeleton-title { height: 24px; margin-bottom: 12px; border-radius: 4px; }
    .skeleton-text { height: 16px; margin-bottom: 8px; border-radius: 4px; }
    .skeleton-text.short { width: 60%; }
    @keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
  `]
})
export class PlaceholdersComponent {}
