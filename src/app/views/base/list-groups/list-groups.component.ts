import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-list-groups',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule, MatIconModule, MatBadgeModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>List Groups</mat-card-title></mat-card-header>
      <mat-card-content>
        <p>List groups are a flexible component for displaying a series of content.</p>
        <div class="list-grid">
          <div>
            <h3>Basic List</h3>
            <mat-list>
              <mat-list-item>Item 1</mat-list-item>
              <mat-list-item>Item 2</mat-list-item>
              <mat-list-item>Item 3</mat-list-item>
              <mat-list-item>Item 4</mat-list-item>
              <mat-list-item>Item 5</mat-list-item>
            </mat-list>
          </div>
          <div>
            <h3>List with Icons</h3>
            <mat-list>
              <mat-list-item><mat-icon matListItemIcon>folder</mat-icon><span matListItemTitle>Documents</span></mat-list-item>
              <mat-list-item><mat-icon matListItemIcon>image</mat-icon><span matListItemTitle>Photos</span></mat-list-item>
              <mat-list-item><mat-icon matListItemIcon>movie</mat-icon><span matListItemTitle>Videos</span></mat-list-item>
              <mat-list-item><mat-icon matListItemIcon>music_note</mat-icon><span matListItemTitle>Music</span></mat-list-item>
            </mat-list>
          </div>
          <div>
            <h3>List with Badges</h3>
            <mat-list>
              <mat-list-item><span matListItemTitle>Inbox</span><span matListItemMeta matBadge="14" matBadgeColor="primary"></span></mat-list-item>
              <mat-list-item><span matListItemTitle>Drafts</span><span matListItemMeta matBadge="2" matBadgeColor="accent"></span></mat-list-item>
              <mat-list-item><span matListItemTitle>Sent</span></mat-list-item>
              <mat-list-item><span matListItemTitle>Spam</span><span matListItemMeta matBadge="99+" matBadgeColor="warn"></span></mat-list-item>
            </mat-list>
          </div>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .list-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 24px; }
    h3 { margin: 16px 0 8px; }
    mat-list { background: #f5f5f5; border-radius: 4px; }
  `]
})
export class ListGroupsComponent {}
