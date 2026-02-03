import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button-groups',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatButtonToggleModule, MatIconModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Button Groups</mat-card-title></mat-card-header>
      <mat-card-content>
        <p>Group a series of buttons together on a single line with the button toggle group.</p>
        <h3>Basic Button Toggle</h3>
        <mat-button-toggle-group>
          <mat-button-toggle value="left">Left</mat-button-toggle>
          <mat-button-toggle value="center">Center</mat-button-toggle>
          <mat-button-toggle value="right">Right</mat-button-toggle>
        </mat-button-toggle-group>
        <h3>Multiple Selection</h3>
        <mat-button-toggle-group multiple>
          <mat-button-toggle value="bold"><mat-icon>format_bold</mat-icon></mat-button-toggle>
          <mat-button-toggle value="italic"><mat-icon>format_italic</mat-icon></mat-button-toggle>
          <mat-button-toggle value="underline"><mat-icon>format_underlined</mat-icon></mat-button-toggle>
        </mat-button-toggle-group>
        <h3>Vertical Button Toggle</h3>
        <mat-button-toggle-group vertical>
          <mat-button-toggle value="option1">Option 1</mat-button-toggle>
          <mat-button-toggle value="option2">Option 2</mat-button-toggle>
          <mat-button-toggle value="option3">Option 3</mat-button-toggle>
        </mat-button-toggle-group>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`h3 { margin: 24px 0 16px; } mat-button-toggle-group { margin-bottom: 16px; }`]
})
export class ButtonGroupsComponent {}
