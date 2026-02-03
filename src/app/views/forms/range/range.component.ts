import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-range',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatSliderModule, FormsModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Range</mat-card-title></mat-card-header>
      <mat-card-content>
        <p>Use our custom range inputs for consistent cross-browser styling and built-in customization.</p>
        <h3>Basic Slider</h3>
        <mat-slider min="0" max="100" step="1" showTickMarks discrete>
          <input matSliderThumb [(ngModel)]="value1">
        </mat-slider>
        <p>Value: {{ value1 }}</p>
        <h3>Range Slider</h3>
        <mat-slider min="0" max="100">
          <input matSliderStartThumb [(ngModel)]="rangeStart">
          <input matSliderEndThumb [(ngModel)]="rangeEnd">
        </mat-slider>
        <p>Range: {{ rangeStart }} - {{ rangeEnd }}</p>
        <h3>Disabled Slider</h3>
        <mat-slider min="0" max="100" disabled>
          <input matSliderThumb value="50">
        </mat-slider>
        <h3>Colored Sliders</h3>
        <mat-slider min="0" max="100" color="primary"><input matSliderThumb value="25"></mat-slider>
        <mat-slider min="0" max="100" color="accent"><input matSliderThumb value="50"></mat-slider>
        <mat-slider min="0" max="100" color="warn"><input matSliderThumb value="75"></mat-slider>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`h3 { margin: 24px 0 16px; } mat-slider { width: 100%; margin-bottom: 8px; }`]
})
export class RangeComponent { value1 = 50; rangeStart = 20; rangeEnd = 80; }
