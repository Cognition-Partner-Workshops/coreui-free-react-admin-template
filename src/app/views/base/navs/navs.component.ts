import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-navs',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTabsModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Navs & Tabs</mat-card-title></mat-card-header>
      <mat-card-content>
        <p>Navigation and tabs components for organizing content.</p>
        <h3>Basic Tabs</h3>
        <mat-tab-group>
          <mat-tab label="Home">Content for Home tab</mat-tab>
          <mat-tab label="Profile">Content for Profile tab</mat-tab>
          <mat-tab label="Messages">Content for Messages tab</mat-tab>
        </mat-tab-group>
        <h3>Tabs with Icons</h3>
        <mat-tab-group>
          <mat-tab><ng-template mat-tab-label><span class="tab-label">Home</span></ng-template>Home content</mat-tab>
          <mat-tab><ng-template mat-tab-label><span class="tab-label">Profile</span></ng-template>Profile content</mat-tab>
          <mat-tab><ng-template mat-tab-label><span class="tab-label">Settings</span></ng-template>Settings content</mat-tab>
        </mat-tab-group>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`h3 { margin: 24px 0 16px; } .tab-label { display: flex; align-items: center; gap: 8px; }`]
})
export class NavsComponent {}
