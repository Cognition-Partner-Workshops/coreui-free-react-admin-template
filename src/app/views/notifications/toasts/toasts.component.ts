import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-toasts',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatSnackBarModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Toasts</mat-card-title></mat-card-header>
      <mat-card-content>
        <p>Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.</p>
        <h3>Basic Toast</h3>
        <button mat-raised-button (click)="showBasicToast()">Show Basic Toast</button>
        <h3>Toast with Action</h3>
        <button mat-raised-button color="primary" (click)="showActionToast()">Show Toast with Action</button>
        <h3>Toast Positions</h3>
        <div class="button-row">
          <button mat-raised-button (click)="showToast('top', 'center')">Top Center</button>
          <button mat-raised-button (click)="showToast('top', 'right')">Top Right</button>
          <button mat-raised-button (click)="showToast('bottom', 'center')">Bottom Center</button>
          <button mat-raised-button (click)="showToast('bottom', 'right')">Bottom Right</button>
        </div>
        <h3>Colored Toasts</h3>
        <div class="button-row">
          <button mat-raised-button color="primary" (click)="showColoredToast('success')">Success</button>
          <button mat-raised-button color="accent" (click)="showColoredToast('info')">Info</button>
          <button mat-raised-button color="warn" (click)="showColoredToast('warning')">Warning</button>
          <button mat-raised-button style="background:#f44336;color:white" (click)="showColoredToast('error')">Error</button>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`h3 { margin: 24px 0 16px; } .button-row { display: flex; gap: 16px; flex-wrap: wrap; }`]
})
export class ToastsComponent {
  snackBar = inject(MatSnackBar);
  
  showBasicToast() {
    this.snackBar.open('This is a basic toast message', '', { duration: 3000 });
  }
  
  showActionToast() {
    this.snackBar.open('Message archived', 'Undo', { duration: 5000 });
  }
  
  showToast(vertical: 'top' | 'bottom', horizontal: 'start' | 'center' | 'end' | 'left' | 'right') {
    this.snackBar.open(`Toast at ${vertical} ${horizontal}`, 'Close', {
      duration: 3000,
      verticalPosition: vertical,
      horizontalPosition: horizontal as 'start' | 'center' | 'end' | 'left' | 'right'
    });
  }
  
  showColoredToast(type: string) {
    const messages: Record<string, string> = {
      success: 'Operation completed successfully!',
      info: 'Here is some information.',
      warning: 'Warning: Please review your input.',
      error: 'Error: Something went wrong!'
    };
    this.snackBar.open(messages[type], 'Close', {
      duration: 3000,
      panelClass: [`toast-${type}`]
    });
  }
}
