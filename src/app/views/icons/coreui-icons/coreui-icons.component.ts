import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-coreui-icons',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatFormFieldModule, MatInputModule, FormsModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Material Icons</mat-card-title></mat-card-header>
      <mat-card-content>
        <p>Angular Material uses Material Design icons. Here are some commonly used icons.</p>
        <mat-form-field appearance="outline" class="search-field">
          <mat-label>Search icons</mat-label>
          <input matInput [(ngModel)]="searchTerm" placeholder="Search...">
        </mat-form-field>
        <div class="icons-grid">
          @for (icon of filteredIcons; track icon) {
            <div class="icon-item">
              <mat-icon>{{ icon }}</mat-icon>
              <span>{{ icon }}</span>
            </div>
          }
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .search-field { width: 100%; max-width: 400px; margin-bottom: 24px; }
    .icons-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 16px; }
    .icon-item { display: flex; flex-direction: column; align-items: center; padding: 16px; background: #f5f5f5; border-radius: 8px; cursor: pointer; transition: background 0.2s; }
    .icon-item:hover { background: #e0e0e0; }
    .icon-item mat-icon { font-size: 32px; width: 32px; height: 32px; margin-bottom: 8px; color: #1976d2; }
    .icon-item span { font-size: 11px; text-align: center; word-break: break-all; color: rgba(0,0,0,0.6); }
  `]
})
export class CoreuiIconsComponent {
  searchTerm = '';
  icons = ['home', 'search', 'settings', 'person', 'favorite', 'star', 'delete', 'edit', 'add', 'remove', 'check', 'close', 'menu', 'more_vert', 'more_horiz', 'arrow_back', 'arrow_forward', 'arrow_upward', 'arrow_downward', 'refresh', 'sync', 'cloud', 'cloud_upload', 'cloud_download', 'folder', 'file_copy', 'attach_file', 'link', 'image', 'photo_camera', 'videocam', 'mic', 'volume_up', 'volume_off', 'notifications', 'email', 'chat', 'forum', 'share', 'thumb_up', 'thumb_down', 'visibility', 'visibility_off', 'lock', 'lock_open', 'security', 'verified', 'warning', 'error', 'info', 'help', 'schedule', 'event', 'today', 'calendar_today', 'access_time', 'timer', 'alarm', 'location_on', 'map', 'navigation', 'directions', 'local_shipping', 'flight', 'hotel', 'restaurant', 'shopping_cart', 'payment', 'credit_card', 'account_balance', 'work', 'business', 'school', 'science', 'code', 'terminal', 'bug_report', 'build', 'extension', 'widgets', 'dashboard', 'analytics', 'insights', 'trending_up', 'trending_down', 'bar_chart', 'pie_chart', 'show_chart', 'table_chart'];
  get filteredIcons() { return this.icons.filter(i => i.includes(this.searchTerm.toLowerCase())); }
}
