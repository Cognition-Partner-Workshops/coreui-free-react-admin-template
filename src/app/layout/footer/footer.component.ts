import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div>
        <a href="https://angular.io" target="_blank">Angular Admin</a>
        <span>&copy; 2024</span>
      </div>
      <div class="ms-auto">
        <span>Powered by</span>
        <a href="https://material.angular.io" target="_blank">Angular Material</a>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding: 16px 24px;
      background: #f8f9fa;
      border-top: 1px solid #e0e0e0;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.6);
    }
    
    .footer a {
      color: #1976d2;
      text-decoration: none;
      margin: 0 4px;
    }
    
    .footer a:hover {
      text-decoration: underline;
    }
    
    .ms-auto {
      margin-left: auto;
    }
  `]
})
export class FooterComponent {}
