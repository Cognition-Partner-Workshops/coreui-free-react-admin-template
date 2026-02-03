import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-tooltips',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatTooltipModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Tooltips</mat-card-title></mat-card-header>
      <mat-card-content>
        <p>Tooltips display informative text when users hover over an element.</p>
        <h3>Tooltip Positions</h3>
        <div class="button-grid">
          <button mat-raised-button matTooltip="Tooltip above" matTooltipPosition="above">Above</button>
          <button mat-raised-button matTooltip="Tooltip below" matTooltipPosition="below">Below</button>
          <button mat-raised-button matTooltip="Tooltip left" matTooltipPosition="left">Left</button>
          <button mat-raised-button matTooltip="Tooltip right" matTooltipPosition="right">Right</button>
        </div>
        <h3>Tooltip with Delay</h3>
        <button mat-raised-button color="primary" matTooltip="Shows after 500ms" [matTooltipShowDelay]="500">Delayed Tooltip</button>
        <h3>Disabled Tooltip</h3>
        <button mat-raised-button matTooltip="This won't show" [matTooltipDisabled]="true">Disabled</button>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`h3 { margin: 24px 0 16px; } .button-grid { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 16px; }`]
})
export class TooltipsComponent {}
