import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Alerts</mat-card-title></mat-card-header>
      <mat-card-content>
        <p>Provide contextual feedback messages for typical user actions.</p>
        <h3>Basic Alerts</h3>
        <div class="alert alert-primary"><mat-icon>info</mat-icon><span>A simple primary alert - check it out!</span></div>
        <div class="alert alert-success"><mat-icon>check_circle</mat-icon><span>A simple success alert - check it out!</span></div>
        <div class="alert alert-warning"><mat-icon>warning</mat-icon><span>A simple warning alert - check it out!</span></div>
        <div class="alert alert-danger"><mat-icon>error</mat-icon><span>A simple danger alert - check it out!</span></div>
        <div class="alert alert-info"><mat-icon>info</mat-icon><span>A simple info alert - check it out!</span></div>
        <h3>Dismissible Alerts</h3>
        @if (showAlert1) {
          <div class="alert alert-success dismissible">
            <mat-icon>check_circle</mat-icon>
            <span>This alert can be dismissed. Click the X to close it.</span>
            <button mat-icon-button (click)="showAlert1 = false"><mat-icon>close</mat-icon></button>
          </div>
        }
        @if (showAlert2) {
          <div class="alert alert-warning dismissible">
            <mat-icon>warning</mat-icon>
            <span>Warning! Better check yourself, you're not looking too good.</span>
            <button mat-icon-button (click)="showAlert2 = false"><mat-icon>close</mat-icon></button>
          </div>
        }
        <h3>Alert with Content</h3>
        <div class="alert alert-success">
          <h4>Well done!</h4>
          <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
          <hr>
          <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    h3 { margin: 24px 0 16px; }
    .alert { display: flex; align-items: flex-start; padding: 16px; border-radius: 4px; margin-bottom: 16px; gap: 12px; }
    .alert mat-icon { flex-shrink: 0; }
    .alert span { flex: 1; }
    .alert h4 { margin: 0 0 8px; }
    .alert p { margin: 0; }
    .alert hr { margin: 16px 0; border: none; border-top: 1px solid rgba(0,0,0,0.1); }
    .alert-primary { background: #e3f2fd; color: #1565c0; }
    .alert-success { background: #e8f5e9; color: #2e7d32; }
    .alert-warning { background: #fff3e0; color: #ef6c00; }
    .alert-danger { background: #ffebee; color: #c62828; }
    .alert-info { background: #e1f5fe; color: #0277bd; }
    .dismissible { padding-right: 8px; }
    .dismissible button { margin-left: auto; }
  `]
})
export class AlertsComponent { showAlert1 = true; showAlert2 = true; }
