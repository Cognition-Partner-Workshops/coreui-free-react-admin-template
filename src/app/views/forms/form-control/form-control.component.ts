import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-form-control',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Form Control</mat-card-title></mat-card-header>
      <mat-card-content>
        <p>Give textual form controls an upgrade with custom styles, sizing, focus states, and more.</p>
        <h3>Basic Input</h3>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Email</mat-label>
          <input matInput placeholder="Enter your email">
        </mat-form-field>
        <h3>Input with Icon</h3>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Search</mat-label>
          <mat-icon matPrefix>search</mat-icon>
          <input matInput placeholder="Search...">
        </mat-form-field>
        <h3>Input with Hint</h3>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Username</mat-label>
          <input matInput>
          <mat-hint>Choose a unique username</mat-hint>
        </mat-form-field>
        <h3>Disabled Input</h3>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Disabled</mat-label>
          <input matInput disabled value="Disabled input">
        </mat-form-field>
        <h3>Readonly Input</h3>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Readonly</mat-label>
          <input matInput readonly value="Readonly input">
        </mat-form-field>
        <h3>Textarea</h3>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Description</mat-label>
          <textarea matInput rows="5" placeholder="Enter description..."></textarea>
        </mat-form-field>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`h3 { margin: 24px 0 16px; } .full-width { width: 100%; }`]
})
export class FormControlComponent {}
