import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-carousels',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Carousel</mat-card-title></mat-card-header>
      <mat-card-content>
        <p>A slideshow component for cycling through elements.</p>
        <div class="carousel">
          <div class="carousel-inner">
            <div class="carousel-item" [class.active]="currentSlide === i" *ngFor="let slide of slides; let i = index">
              <div class="slide-content" [style.background-color]="slide.color">
                <h2>{{ slide.title }}</h2>
                <p>{{ slide.description }}</p>
              </div>
            </div>
          </div>
          <button class="carousel-control prev" (click)="prevSlide()"><mat-icon>chevron_left</mat-icon></button>
          <button class="carousel-control next" (click)="nextSlide()"><mat-icon>chevron_right</mat-icon></button>
          <div class="carousel-indicators">
            <button *ngFor="let slide of slides; let i = index" [class.active]="currentSlide === i" (click)="goToSlide(i)"></button>
          </div>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .carousel { position: relative; width: 100%; max-width: 800px; margin: 24px auto; overflow: hidden; border-radius: 8px; }
    .carousel-inner { display: flex; transition: transform 0.5s ease; }
    .carousel-item { min-width: 100%; display: none; }
    .carousel-item.active { display: block; }
    .slide-content { height: 300px; display: flex; flex-direction: column; justify-content: center; align-items: center; color: white; }
    .carousel-control { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.5); color: white; border: none; padding: 16px 8px; cursor: pointer; }
    .carousel-control.prev { left: 0; }
    .carousel-control.next { right: 0; }
    .carousel-indicators { position: absolute; bottom: 16px; left: 50%; transform: translateX(-50%); display: flex; gap: 8px; }
    .carousel-indicators button { width: 12px; height: 12px; border-radius: 50%; border: none; background: rgba(255,255,255,0.5); cursor: pointer; }
    .carousel-indicators button.active { background: white; }
  `]
})
export class CarouselsComponent {
  currentSlide = 0;
  slides = [
    { title: 'First Slide', description: 'This is the first slide content', color: '#1976d2' },
    { title: 'Second Slide', description: 'This is the second slide content', color: '#388e3c' },
    { title: 'Third Slide', description: 'This is the third slide content', color: '#f57c00' }
  ];
  prevSlide() { this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1; }
  nextSlide() { this.currentSlide = (this.currentSlide + 1) % this.slides.length; }
  goToSlide(index: number) { this.currentSlide = index; }
}
