import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SidebarService } from '../../services/sidebar.service';
import { NavService, NavItem } from '../../services/nav.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    MatBadgeModule,
    MatTooltipModule
  ],
  template: `
    <div class="sidebar" [class.collapsed]="!sidebarService.sidebarVisible()">
      <div class="sidebar-brand">
        <a routerLink="/dashboard" class="brand-link">
          <mat-icon class="brand-icon">admin_panel_settings</mat-icon>
          <span class="brand-text" *ngIf="sidebarService.sidebarVisible()">Admin Dashboard</span>
        </a>
      </div>
      
      <mat-nav-list class="sidebar-nav">
        @for (item of navItems; track item.name) {
          @if (item.title) {
            <div class="nav-title" *ngIf="sidebarService.sidebarVisible()">{{ item.name }}</div>
          } @else if (item.children) {
            <mat-expansion-panel class="nav-group" [expanded]="false">
              <mat-expansion-panel-header>
                <mat-panel-title>
                  <mat-icon>{{ item.icon }}</mat-icon>
                  <span *ngIf="sidebarService.sidebarVisible()">{{ item.name }}</span>
                </mat-panel-title>
              </mat-expansion-panel-header>
              @for (child of item.children; track child.name) {
                <a mat-list-item [routerLink]="child.url" routerLinkActive="active">
                  <span class="nav-item-text">{{ child.name }}</span>
                </a>
              }
            </mat-expansion-panel>
          } @else {
            @if (item.external) {
              <a mat-list-item [href]="item.url" target="_blank" class="nav-item">
                <mat-icon matListItemIcon>{{ item.icon }}</mat-icon>
                <span matListItemTitle *ngIf="sidebarService.sidebarVisible()">{{ item.name }}</span>
                <mat-icon class="external-icon">open_in_new</mat-icon>
              </a>
            } @else {
              <a mat-list-item [routerLink]="item.url" routerLinkActive="active" class="nav-item">
                <mat-icon matListItemIcon>{{ item.icon }}</mat-icon>
                <span matListItemTitle *ngIf="sidebarService.sidebarVisible()">{{ item.name }}</span>
                @if (item.badge) {
                  <span class="nav-badge" [style.background-color]="getBadgeColor(item.badge.color)">
                    {{ item.badge.text }}
                  </span>
                }
              </a>
            }
          }
        }
      </mat-nav-list>
    </div>
  `,
  styles: [`
    .sidebar {
      width: 256px;
      height: 100vh;
      background: linear-gradient(180deg, #3c4b64 0%, #303c54 100%);
      color: rgba(255, 255, 255, 0.87);
      transition: width 0.3s ease;
      overflow-x: hidden;
      overflow-y: auto;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 1000;
    }
    
    .sidebar.collapsed {
      width: 0;
    }
    
    .sidebar-brand {
      padding: 16px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .brand-link {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: white;
      font-size: 18px;
      font-weight: 500;
    }
    
    .brand-icon {
      font-size: 32px;
      width: 32px;
      height: 32px;
      margin-right: 12px;
    }
    
    .sidebar-nav {
      padding: 8px 0;
    }
    
    .nav-title {
      padding: 16px 16px 8px;
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: rgba(255, 255, 255, 0.5);
    }
    
    .nav-item {
      color: rgba(255, 255, 255, 0.8) !important;
      margin: 2px 8px;
      border-radius: 4px;
    }
    
    .nav-item:hover {
      background: rgba(255, 255, 255, 0.1) !important;
    }
    
    .nav-item.active {
      background: rgba(255, 255, 255, 0.15) !important;
      color: white !important;
    }
    
    .nav-badge {
      font-size: 10px;
      padding: 2px 6px;
      border-radius: 4px;
      color: white;
      margin-left: auto;
    }
    
    .external-icon {
      font-size: 14px;
      width: 14px;
      height: 14px;
      margin-left: auto;
      opacity: 0.6;
    }
    
    ::ng-deep .nav-group {
      background: transparent !important;
      box-shadow: none !important;
      margin: 2px 8px;
    }
    
    ::ng-deep .nav-group .mat-expansion-panel-header {
      color: rgba(255, 255, 255, 0.8) !important;
      padding: 0 16px;
      height: 48px;
    }
    
    ::ng-deep .nav-group .mat-expansion-panel-header:hover {
      background: rgba(255, 255, 255, 0.1) !important;
    }
    
    ::ng-deep .nav-group .mat-expansion-panel-body {
      padding: 0 0 0 24px;
    }
    
    ::ng-deep .nav-group mat-icon {
      color: rgba(255, 255, 255, 0.8);
      margin-right: 12px;
    }
    
    ::ng-deep .nav-group .mat-expansion-indicator::after {
      color: rgba(255, 255, 255, 0.6);
    }
    
    .nav-item-text {
      color: rgba(255, 255, 255, 0.7);
      font-size: 14px;
    }
  `]
})
export class SidebarComponent {
  sidebarService = inject(SidebarService);
  private navService = inject(NavService);
  
  navItems: NavItem[] = this.navService.getNavItems();
  
  getBadgeColor(color: string): string {
    const colors: Record<string, string> = {
      'primary': '#1976d2',
      'accent': '#ff4081',
      'warn': '#f44336',
      'success': '#4caf50',
      'info': '#2196f3'
    };
    return colors[color] || colors['primary'];
  }
}
