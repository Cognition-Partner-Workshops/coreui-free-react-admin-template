import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatSelectModule, FormsModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Select</mat-card-title></mat-card-header>
      <mat-card-content>
        <p>Customize the native selects with custom CSS that changes the element's initial appearance.</p>
        <h3>Basic Select</h3>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Select an option</mat-label>
          <mat-select>
            <mat-option value="1">Option 1</mat-option>
            <mat-option value="2">Option 2</mat-option>
            <mat-option value="3">Option 3</mat-option>
          </mat-select>
        </mat-form-field>
        <h3>Multiple Select</h3>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Select multiple</mat-label>
          <mat-select multiple>
            <mat-option value="1">Option 1</mat-option>
            <mat-option value="2">Option 2</mat-option>
            <mat-option value="3">Option 3</mat-option>
            <mat-option value="4">Option 4</mat-option>
          </mat-select>
        </mat-form-field>
        <h3>With Option Groups</h3>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Select a car</mat-label>
          <mat-select>
            <mat-optgroup label="German Cars">
              <mat-option value="mercedes">Mercedes</mat-option>
              <mat-option value="audi">Audi</mat-option>
              <mat-option value="bmw">BMW</mat-option>
            </mat-optgroup>
            <mat-optgroup label="Japanese Cars">
              <mat-option value="toyota">Toyota</mat-option>
              <mat-option value="honda">Honda</mat-option>
              <mat-option value="nissan">Nissan</mat-option>
            </mat-optgroup>
          </mat-select>
        </mat-form-field>
        <h3>Disabled Select</h3>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Disabled</mat-label>
          <mat-select disabled><mat-option value="1">Option 1</mat-option></mat-select>
        </mat-form-field>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`h3 { margin: 24px 0 16px; } .full-width { width: 100%; }`]
})
export class SelectComponent {}
