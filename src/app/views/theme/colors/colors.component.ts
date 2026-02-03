import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-colors',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <div class="colors-page">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Theme Colors</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>Below are the theme colors used throughout the application.</p>
          
          <h3>Primary Colors</h3>
          <div class="color-grid">
            @for (color of primaryColors; track color.name) {
              <div class="color-item">
                <div class="color-swatch" [style.background-color]="color.hex"></div>
                <div class="color-info">
                  <div class="color-name">{{ color.name }}</div>
                  <div class="color-hex">{{ color.hex }}</div>
                </div>
              </div>
            }
          </div>
          
          <h3>Accent Colors</h3>
          <div class="color-grid">
            @for (color of accentColors; track color.name) {
              <div class="color-item">
                <div class="color-swatch" [style.background-color]="color.hex"></div>
                <div class="color-info">
                  <div class="color-name">{{ color.name }}</div>
                  <div class="color-hex">{{ color.hex }}</div>
                </div>
              </div>
            }
          </div>
          
          <h3>Status Colors</h3>
          <div class="color-grid">
            @for (color of statusColors; track color.name) {
              <div class="color-item">
                <div class="color-swatch" [style.background-color]="color.hex"></div>
                <div class="color-info">
                  <div class="color-name">{{ color.name }}</div>
                  <div class="color-hex">{{ color.hex }}</div>
                </div>
              </div>
            }
          </div>
          
          <h3>Gray Scale</h3>
          <div class="color-grid">
            @for (color of grayColors; track color.name) {
              <div class="color-item">
                <div class="color-swatch" [style.background-color]="color.hex"></div>
                <div class="color-info">
                  <div class="color-name">{{ color.name }}</div>
                  <div class="color-hex">{{ color.hex }}</div>
                </div>
              </div>
            }
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .colors-page {
      max-width: 1200px;
    }
    
    h3 {
      margin: 24px 0 16px;
      font-size: 18px;
      font-weight: 500;
    }
    
    .color-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 16px;
    }
    
    .color-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 8px;
      border-radius: 8px;
      background: #f5f5f5;
    }
    
    .color-swatch {
      width: 48px;
      height: 48px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .color-name {
      font-weight: 500;
    }
    
    .color-hex {
      font-size: 12px;
      color: rgba(0,0,0,0.54);
      font-family: monospace;
    }
  `]
})
export class ColorsComponent {
  primaryColors = [
    { name: 'Primary', hex: '#1976d2' },
    { name: 'Primary Light', hex: '#42a5f5' },
    { name: 'Primary Dark', hex: '#1565c0' }
  ];
  
  accentColors = [
    { name: 'Accent', hex: '#ff4081' },
    { name: 'Accent Light', hex: '#ff79b0' },
    { name: 'Accent Dark', hex: '#c60055' }
  ];
  
  statusColors = [
    { name: 'Success', hex: '#4caf50' },
    { name: 'Info', hex: '#2196f3' },
    { name: 'Warning', hex: '#ff9800' },
    { name: 'Danger', hex: '#f44336' }
  ];
  
  grayColors = [
    { name: 'Gray 50', hex: '#fafafa' },
    { name: 'Gray 100', hex: '#f5f5f5' },
    { name: 'Gray 200', hex: '#eeeeee' },
    { name: 'Gray 300', hex: '#e0e0e0' },
    { name: 'Gray 400', hex: '#bdbdbd' },
    { name: 'Gray 500', hex: '#9e9e9e' },
    { name: 'Gray 600', hex: '#757575' },
    { name: 'Gray 700', hex: '#616161' },
    { name: 'Gray 800', hex: '#424242' },
    { name: 'Gray 900', hex: '#212121' }
  ];
}
