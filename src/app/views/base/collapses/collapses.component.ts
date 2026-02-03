import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-collapses',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Collapse</mat-card-title></mat-card-header>
      <mat-card-content>
        <p>Toggle the visibility of content with a collapse animation.</p>
        <button mat-raised-button color="primary" (click)="isCollapsed = !isCollapsed">Toggle Collapse</button>
        <div class="collapse-content" [class.show]="!isCollapsed">
          <div class="collapse-inner">
            <p>This content can be collapsed and expanded. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <h3>Multiple Targets</h3>
        <div class="button-group">
          <button mat-raised-button (click)="collapse1 = !collapse1">Toggle First</button>
          <button mat-raised-button (click)="collapse2 = !collapse2">Toggle Second</button>
          <button mat-raised-button (click)="collapse1 = !collapse1; collapse2 = !collapse2">Toggle Both</button>
        </div>
        <div class="collapse-grid">
          <div class="collapse-content" [class.show]="!collapse1"><div class="collapse-inner">First collapse content.</div></div>
          <div class="collapse-content" [class.show]="!collapse2"><div class="collapse-inner">Second collapse content.</div></div>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    h3 { margin: 24px 0 16px; }
    .collapse-content { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; }
    .collapse-content.show { max-height: 200px; }
    .collapse-inner { padding: 16px; margin-top: 16px; background: #f5f5f5; border-radius: 4px; }
    .button-group { display: flex; gap: 8px; margin-bottom: 16px; }
    .collapse-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  `]
})
export class CollapsesComponent {
  isCollapsed = true;
  collapse1 = true;
  collapse2 = true;
}
