import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SidebarComponent,
    HeaderComponent,
    FooterComponent
  ],
  template: `
    <div class="app-container" [class.sidebar-collapsed]="!sidebarService.sidebarVisible()">
      <app-sidebar></app-sidebar>
      <div class="main-wrapper">
        <app-header></app-header>
        <main class="main-content">
          <router-outlet></router-outlet>
        </main>
        <app-footer></app-footer>
      </div>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      min-height: 100vh;
    }
    
    .main-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-left: 256px;
      min-height: 100vh;
      transition: margin-left 0.3s ease;
    }
    
    .sidebar-collapsed .main-wrapper {
      margin-left: 0;
    }
    
    .main-content {
      flex: 1;
      padding: 24px;
      margin-top: 64px;
      background: #f8f9fa;
    }
    
    @media (max-width: 768px) {
      .main-wrapper {
        margin-left: 0;
      }
    }
  `]
})
export class DefaultLayoutComponent {
  sidebarService = inject(SidebarService);
}
