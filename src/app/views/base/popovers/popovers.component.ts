import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-popovers',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatTooltipModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Popovers</mat-card-title></mat-card-header>
      <mat-card-content>
        <p>Popovers display informative text when users hover over, focus on, or tap an element.</p>
        <h3>Tooltip Positions</h3>
        <div class="button-grid">
          <button mat-raised-button matTooltip="Tooltip on top" matTooltipPosition="above">Top</button>
          <button mat-raised-button matTooltip="Tooltip on right" matTooltipPosition="right">Right</button>
          <button mat-raised-button matTooltip="Tooltip on bottom" matTooltipPosition="below">Bottom</button>
          <button mat-raised-button matTooltip="Tooltip on left" matTooltipPosition="left">Left</button>
        </div>
        <h3>Custom Tooltips</h3>
        <button mat-raised-button color="primary" matTooltip="This is a longer tooltip message that provides more information">Hover for info</button>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`h3 { margin: 24px 0 16px; } .button-grid { display: flex; gap: 16px; flex-wrap: wrap; }`]
})
export class PopoversComponent {}
