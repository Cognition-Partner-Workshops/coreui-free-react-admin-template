import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SidebarService } from '../../services/sidebar.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
    imports: [
      CommonModule,
      RouterModule,
      MatToolbarModule,
      MatButtonModule,
      MatIconModule,
      MatMenuModule,
      MatBadgeModule,
      MatDividerModule,
      MatTooltipModule
    ],
  template: `
    <mat-toolbar class="header">
      <button mat-icon-button (click)="sidebarService.toggleSidebar()">
        <mat-icon>menu</mat-icon>
      </button>
      
      <nav class="header-nav">
        <a routerLink="/dashboard" class="nav-link">Dashboard</a>
        <a routerLink="/widgets" class="nav-link">Widgets</a>
        <a routerLink="/charts" class="nav-link">Charts</a>
      </nav>
      
      <span class="spacer"></span>
      
      <button mat-icon-button [matMenuTriggerFor]="notificationMenu" matBadge="5" matBadgeColor="warn" matBadgeSize="small">
        <mat-icon>notifications</mat-icon>
      </button>
      <mat-menu #notificationMenu="matMenu">
        <div class="menu-header">You have 5 notifications</div>
        <mat-divider></mat-divider>
        <button mat-menu-item>
          <mat-icon color="warn">warning</mat-icon>
          <span>CPU usage is high</span>
        </button>
        <button mat-menu-item>
          <mat-icon color="primary">person_add</mat-icon>
          <span>New user registered</span>
        </button>
        <button mat-menu-item>
          <mat-icon color="accent">shopping_cart</mat-icon>
          <span>New order received</span>
        </button>
        <button mat-menu-item>
          <mat-icon>mail</mat-icon>
          <span>New message</span>
        </button>
        <button mat-menu-item>
          <mat-icon color="primary">task_alt</mat-icon>
          <span>Task completed</span>
        </button>
      </mat-menu>
      
      <button mat-icon-button [matMenuTriggerFor]="taskMenu" matBadge="3" matBadgeColor="accent" matBadgeSize="small">
        <mat-icon>assignment</mat-icon>
      </button>
      <mat-menu #taskMenu="matMenu">
        <div class="menu-header">You have 3 pending tasks</div>
        <mat-divider></mat-divider>
        <button mat-menu-item>
          <span>Update documentation</span>
        </button>
        <button mat-menu-item>
          <span>Review pull requests</span>
        </button>
        <button mat-menu-item>
          <span>Deploy to production</span>
        </button>
      </mat-menu>
      
      <button mat-icon-button [matMenuTriggerFor]="messageMenu" matBadge="4" matBadgeColor="primary" matBadgeSize="small">
        <mat-icon>mail</mat-icon>
      </button>
      <mat-menu #messageMenu="matMenu">
        <div class="menu-header">You have 4 messages</div>
        <mat-divider></mat-divider>
        <button mat-menu-item>
          <mat-icon>account_circle</mat-icon>
          <span>John: Hey, how are you?</span>
        </button>
        <button mat-menu-item>
          <mat-icon>account_circle</mat-icon>
          <span>Jane: Meeting at 3pm</span>
        </button>
        <button mat-menu-item>
          <mat-icon>account_circle</mat-icon>
          <span>Bob: Project update</span>
        </button>
        <button mat-menu-item>
          <mat-icon>account_circle</mat-icon>
          <span>Alice: Review needed</span>
        </button>
      </mat-menu>
      
      <button mat-icon-button (click)="themeService.toggleTheme()" [matTooltip]="'Current: ' + themeService.theme()">
        <mat-icon>{{ getThemeIcon() }}</mat-icon>
      </button>
      
      <button mat-icon-button [matMenuTriggerFor]="userMenu">
        <mat-icon>account_circle</mat-icon>
      </button>
      <mat-menu #userMenu="matMenu">
        <button mat-menu-item>
          <mat-icon>account_box</mat-icon>
          <span>Profile</span>
        </button>
        <button mat-menu-item>
          <mat-icon>settings</mat-icon>
          <span>Settings</span>
        </button>
        <button mat-menu-item>
          <mat-icon>payment</mat-icon>
          <span>Payments</span>
        </button>
        <mat-divider></mat-divider>
        <button mat-menu-item>
          <mat-icon>lock</mat-icon>
          <span>Lock Account</span>
        </button>
        <button mat-menu-item routerLink="/login">
          <mat-icon>logout</mat-icon>
          <span>Logout</span>
        </button>
      </mat-menu>
    </mat-toolbar>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      right: 0;
      left: 256px;
      z-index: 999;
      background: white;
      border-bottom: 1px solid #e0e0e0;
      transition: left 0.3s ease;
    }
    
    :host-context(.sidebar-collapsed) .header {
      left: 0;
    }
    
    .header-nav {
      display: flex;
      margin-left: 16px;
    }
    
    .nav-link {
      padding: 8px 16px;
      text-decoration: none;
      color: rgba(0, 0, 0, 0.7);
      font-size: 14px;
    }
    
    .nav-link:hover {
      color: #1976d2;
    }
    
    .spacer {
      flex: 1;
    }
    
    .menu-header {
      padding: 12px 16px;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.87);
    }
    
    @media (max-width: 768px) {
      .header {
        left: 0;
      }
      
      .header-nav {
        display: none;
      }
    }
  `]
})
export class HeaderComponent {
  sidebarService = inject(SidebarService);
  themeService = inject(ThemeService);
  
  getThemeIcon(): string {
    const theme = this.themeService.theme();
    if (theme === 'light') return 'light_mode';
    if (theme === 'dark') return 'dark_mode';
    return 'brightness_auto';
  }
}
