import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Brand Icons</mat-card-title></mat-card-header>
      <mat-card-content>
        <p>Brand icons representing popular companies and services. Material Icons includes some brand icons.</p>
        <div class="brands-grid">
          @for (brand of brands; track brand.name) {
            <div class="brand-item" [style.background-color]="brand.color">
              <mat-icon>{{ brand.icon }}</mat-icon>
              <span>{{ brand.name }}</span>
            </div>
          }
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .brands-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 16px; }
    .brand-item { display: flex; flex-direction: column; align-items: center; padding: 20px 16px; border-radius: 8px; color: white; }
    .brand-item mat-icon { font-size: 36px; width: 36px; height: 36px; margin-bottom: 8px; }
    .brand-item span { font-size: 12px; font-weight: 500; }
  `]
})
export class BrandsComponent {
  brands = [
    { name: 'Facebook', icon: 'facebook', color: '#1877f2' },
    { name: 'Google', icon: 'g_mobiledata', color: '#4285f4' },
    { name: 'Apple', icon: 'apple', color: '#000000' },
    { name: 'Android', icon: 'android', color: '#3ddc84' },
    { name: 'YouTube', icon: 'smart_display', color: '#ff0000' },
    { name: 'Twitter', icon: 'flutter_dash', color: '#1da1f2' },
    { name: 'LinkedIn', icon: 'work', color: '#0a66c2' },
    { name: 'GitHub', icon: 'code', color: '#333333' },
    { name: 'Slack', icon: 'tag', color: '#4a154b' },
    { name: 'Microsoft', icon: 'window', color: '#00a4ef' },
    { name: 'Amazon', icon: 'shopping_bag', color: '#ff9900' },
    { name: 'Netflix', icon: 'movie', color: '#e50914' }
  ];
}
