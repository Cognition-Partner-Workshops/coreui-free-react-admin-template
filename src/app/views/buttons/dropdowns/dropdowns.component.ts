import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-dropdowns',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatMenuModule, MatIconModule, MatDividerModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Dropdowns</mat-card-title></mat-card-header>
      <mat-card-content>
        <p>Toggle contextual overlays for displaying lists of links and more.</p>
        <h3>Basic Dropdown</h3>
        <div class="button-row">
          <button mat-raised-button [matMenuTriggerFor]="menu1">Dropdown <mat-icon>arrow_drop_down</mat-icon></button>
          <mat-menu #menu1="matMenu">
            <button mat-menu-item>Action</button>
            <button mat-menu-item>Another action</button>
            <button mat-menu-item>Something else here</button>
          </mat-menu>
        </div>
        <h3>Colored Dropdowns</h3>
        <div class="button-row">
          <button mat-raised-button color="primary" [matMenuTriggerFor]="menu2">Primary <mat-icon>arrow_drop_down</mat-icon></button>
          <mat-menu #menu2="matMenu">
            <button mat-menu-item>Action</button>
            <button mat-menu-item>Another action</button>
          </mat-menu>
          <button mat-raised-button color="accent" [matMenuTriggerFor]="menu3">Accent <mat-icon>arrow_drop_down</mat-icon></button>
          <mat-menu #menu3="matMenu">
            <button mat-menu-item>Action</button>
            <button mat-menu-item>Another action</button>
          </mat-menu>
          <button mat-raised-button color="warn" [matMenuTriggerFor]="menu4">Warn <mat-icon>arrow_drop_down</mat-icon></button>
          <mat-menu #menu4="matMenu">
            <button mat-menu-item>Action</button>
            <button mat-menu-item>Another action</button>
          </mat-menu>
        </div>
        <h3>Dropdown with Divider</h3>
        <button mat-raised-button [matMenuTriggerFor]="menu5">Options <mat-icon>arrow_drop_down</mat-icon></button>
        <mat-menu #menu5="matMenu">
          <button mat-menu-item>Action</button>
          <button mat-menu-item>Another action</button>
          <mat-divider></mat-divider>
          <button mat-menu-item>Separated link</button>
        </mat-menu>
        <h3>Nested Menu</h3>
        <button mat-raised-button [matMenuTriggerFor]="animals">Animals <mat-icon>arrow_drop_down</mat-icon></button>
        <mat-menu #animals="matMenu">
          <button mat-menu-item [matMenuTriggerFor]="vertebrates">Vertebrates</button>
          <button mat-menu-item [matMenuTriggerFor]="invertebrates">Invertebrates</button>
        </mat-menu>
        <mat-menu #vertebrates="matMenu">
          <button mat-menu-item>Fishes</button>
          <button mat-menu-item>Amphibians</button>
          <button mat-menu-item>Reptiles</button>
        </mat-menu>
        <mat-menu #invertebrates="matMenu">
          <button mat-menu-item>Insects</button>
          <button mat-menu-item>Molluscs</button>
        </mat-menu>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`h3 { margin: 24px 0 16px; } .button-row { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 16px; }`]
})
export class DropdownsComponent {}
