import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Buttons</mat-card-title></mat-card-header>
      <mat-card-content>
        <p>Use Angular Material's button variants for actions in forms, dialogs, and more.</p>
        <h3>Basic Buttons</h3>
        <div class="button-row">
          <button mat-button>Basic</button>
          <button mat-button color="primary">Primary</button>
          <button mat-button color="accent">Accent</button>
          <button mat-button color="warn">Warn</button>
          <button mat-button disabled>Disabled</button>
        </div>
        <h3>Raised Buttons</h3>
        <div class="button-row">
          <button mat-raised-button>Basic</button>
          <button mat-raised-button color="primary">Primary</button>
          <button mat-raised-button color="accent">Accent</button>
          <button mat-raised-button color="warn">Warn</button>
          <button mat-raised-button disabled>Disabled</button>
        </div>
        <h3>Stroked Buttons</h3>
        <div class="button-row">
          <button mat-stroked-button>Basic</button>
          <button mat-stroked-button color="primary">Primary</button>
          <button mat-stroked-button color="accent">Accent</button>
          <button mat-stroked-button color="warn">Warn</button>
          <button mat-stroked-button disabled>Disabled</button>
        </div>
        <h3>Flat Buttons</h3>
        <div class="button-row">
          <button mat-flat-button>Basic</button>
          <button mat-flat-button color="primary">Primary</button>
          <button mat-flat-button color="accent">Accent</button>
          <button mat-flat-button color="warn">Warn</button>
          <button mat-flat-button disabled>Disabled</button>
        </div>
        <h3>Icon Buttons</h3>
        <div class="button-row">
          <button mat-icon-button><mat-icon>home</mat-icon></button>
          <button mat-icon-button color="primary"><mat-icon>favorite</mat-icon></button>
          <button mat-icon-button color="accent"><mat-icon>settings</mat-icon></button>
          <button mat-icon-button color="warn"><mat-icon>delete</mat-icon></button>
        </div>
        <h3>FAB Buttons</h3>
        <div class="button-row">
          <button mat-fab color="primary"><mat-icon>add</mat-icon></button>
          <button mat-fab color="accent"><mat-icon>edit</mat-icon></button>
          <button mat-fab color="warn"><mat-icon>delete</mat-icon></button>
          <button mat-mini-fab color="primary"><mat-icon>add</mat-icon></button>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`h3 { margin: 24px 0 16px; } .button-row { display: flex; gap: 16px; flex-wrap: wrap; align-items: center; margin-bottom: 16px; }`]
})
export class ButtonsComponent {}
