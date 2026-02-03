import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTabsModule, MatIconModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Tabs</mat-card-title></mat-card-header>
      <mat-card-content>
        <p>Tabs organize content across different screens, data sets, and other interactions.</p>
        <h3>Basic Tabs</h3>
        <mat-tab-group>
          <mat-tab label="First">Content 1</mat-tab>
          <mat-tab label="Second">Content 2</mat-tab>
          <mat-tab label="Third">Content 3</mat-tab>
        </mat-tab-group>
        <h3>Tabs with Icons</h3>
        <mat-tab-group>
          <mat-tab><ng-template mat-tab-label><mat-icon>home</mat-icon> Home</ng-template>Home content</mat-tab>
          <mat-tab><ng-template mat-tab-label><mat-icon>person</mat-icon> Profile</ng-template>Profile content</mat-tab>
          <mat-tab><ng-template mat-tab-label><mat-icon>settings</mat-icon> Settings</ng-template>Settings content</mat-tab>
        </mat-tab-group>
        <h3>Stretched Tabs</h3>
        <mat-tab-group mat-stretch-tabs="true">
          <mat-tab label="First">Content 1</mat-tab>
          <mat-tab label="Second">Content 2</mat-tab>
          <mat-tab label="Third">Content 3</mat-tab>
        </mat-tab-group>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`h3 { margin: 24px 0 16px; } mat-tab-group { margin-bottom: 24px; }`]
})
export class TabsComponent {}
