import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-modals',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatDialogModule, MatIconModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Modals</mat-card-title></mat-card-header>
      <mat-card-content>
        <p>Use Angular Material's dialog service to add dialogs to your site for lightboxes, user notifications, or completely custom content.</p>
        <h3>Basic Modal</h3>
        <button mat-raised-button color="primary" (click)="openBasicDialog()">Launch demo modal</button>
        <h3>Scrollable Modal</h3>
        <button mat-raised-button color="accent" (click)="openScrollableDialog()">Launch scrollable modal</button>
        <h3>Confirmation Modal</h3>
        <button mat-raised-button color="warn" (click)="openConfirmDialog()">Launch confirmation modal</button>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`h3 { margin: 24px 0 16px; }`]
})
export class ModalsComponent {
  dialog = inject(MatDialog);
  
  openBasicDialog() {
    this.dialog.open(BasicDialogComponent, { width: '500px' });
  }
  
  openScrollableDialog() {
    this.dialog.open(ScrollableDialogComponent, { width: '500px', maxHeight: '400px' });
  }
  
  openConfirmDialog() {
    this.dialog.open(ConfirmDialogComponent, { width: '400px' });
  }
}

@Component({
  selector: 'basic-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title>Modal Title</h2>
    <mat-dialog-content>
      <p>This is a basic modal dialog. You can put any content here.</p>
      <p>Woohoo, you're reading this text in a modal!</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Close</button>
      <button mat-raised-button color="primary" mat-dialog-close>Save changes</button>
    </mat-dialog-actions>
  `
})
export class BasicDialogComponent {}

@Component({
  selector: 'scrollable-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title>Scrollable Modal</h2>
    <mat-dialog-content>
      <p>This is some placeholder content to show the scrolling behavior for modals.</p>
      @for (i of [1,2,3,4,5,6,7,8,9,10]; track i) {
        <p>This is repeated content to demonstrate scrolling. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      }
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Close</button>
      <button mat-raised-button color="primary" mat-dialog-close>Save changes</button>
    </mat-dialog-actions>
  `
})
export class ScrollableDialogComponent {}

@Component({
  selector: 'confirm-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
  template: `
    <h2 mat-dialog-title><mat-icon color="warn">warning</mat-icon> Confirm Action</h2>
    <mat-dialog-content>
      <p>Are you sure you want to proceed with this action? This cannot be undone.</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-raised-button color="warn" mat-dialog-close>Confirm</button>
    </mat-dialog-actions>
  `,
  styles: [`h2 { display: flex; align-items: center; gap: 8px; }`]
})
export class ConfirmDialogComponent {}
