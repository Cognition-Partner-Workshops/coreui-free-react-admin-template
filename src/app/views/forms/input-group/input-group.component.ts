import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-input-group',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Input Group</mat-card-title></mat-card-header>
      <mat-card-content>
        <p>Extend form controls by adding text, buttons, or button groups on either side of textual inputs.</p>
        <h3>With Prefix</h3>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Username</mat-label>
          <span matTextPrefix>&#64;&nbsp;</span>
          <input matInput>
        </mat-form-field>
        <h3>With Suffix</h3>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Email</mat-label>
          <input matInput>
          <span matTextSuffix>&nbsp;&#64;example.com</span>
        </mat-form-field>
        <h3>With Icon Prefix</h3>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Amount</mat-label>
          <mat-icon matPrefix>attach_money</mat-icon>
          <input matInput type="number">
          <span matTextSuffix>.00</span>
        </mat-form-field>
        <h3>With Button</h3>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Search</mat-label>
          <input matInput placeholder="Search...">
          <button mat-icon-button matSuffix><mat-icon>search</mat-icon></button>
        </mat-form-field>
        <h3>Password with Toggle</h3>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Password</mat-label>
          <input matInput [type]="hidePassword ? 'password' : 'text'">
          <button mat-icon-button matSuffix (click)="hidePassword = !hidePassword">
            <mat-icon>{{hidePassword ? 'visibility_off' : 'visibility'}}</mat-icon>
          </button>
        </mat-form-field>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`h3 { margin: 24px 0 16px; } .full-width { width: 100%; }`]
})
export class InputGroupComponent { hidePassword = true; }
