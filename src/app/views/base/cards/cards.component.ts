import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <div class="cards-page">
      <mat-card>
        <mat-card-header><mat-card-title>Cards</mat-card-title></mat-card-header>
        <mat-card-content>
          <p>Cards contain content and actions about a single subject.</p>
          <div class="cards-grid">
            <mat-card class="example-card">
              <mat-card-header>
                <mat-card-title>Card Title</mat-card-title>
                <mat-card-subtitle>Card Subtitle</mat-card-subtitle>
              </mat-card-header>
              <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo">
              <mat-card-content><p>Some quick example text to build on the card title and make up the bulk of the card's content.</p></mat-card-content>
              <mat-card-actions>
                <button mat-button color="primary">LIKE</button>
                <button mat-button color="primary">SHARE</button>
              </mat-card-actions>
            </mat-card>
            <mat-card class="example-card">
              <mat-card-header>
                <mat-card-title>Simple Card</mat-card-title>
              </mat-card-header>
              <mat-card-content><p>This is a simple card without an image. Cards can contain various types of content.</p></mat-card-content>
              <mat-card-actions align="end">
                <button mat-raised-button color="primary">Action</button>
              </mat-card-actions>
            </mat-card>
            <mat-card class="example-card primary-card">
              <mat-card-header>
                <mat-card-title>Primary Card</mat-card-title>
              </mat-card-header>
              <mat-card-content><p>This card has a primary color background.</p></mat-card-content>
            </mat-card>
            <mat-card class="example-card success-card">
              <mat-card-header>
                <mat-card-title>Success Card</mat-card-title>
              </mat-card-header>
              <mat-card-content><p>This card indicates a successful state.</p></mat-card-content>
            </mat-card>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .cards-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px; margin-top: 24px; }
    .example-card { max-width: 400px; }
    .primary-card { background: #1976d2; color: white; }
    .success-card { background: #4caf50; color: white; }
  `]
})
export class CardsComponent {}
