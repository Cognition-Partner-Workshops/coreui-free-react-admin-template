import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-paginations',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatPaginatorModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Pagination</mat-card-title></mat-card-header>
      <mat-card-content>
        <p>Pagination component for navigating through pages of content.</p>
        <h3>Basic Pagination</h3>
        <mat-paginator [length]="100" [pageSize]="10" [pageSizeOptions]="[5, 10, 25, 100]"></mat-paginator>
        <h3>Simple Pagination</h3>
        <mat-paginator [length]="50" [pageSize]="10" [hidePageSize]="true"></mat-paginator>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`h3 { margin: 24px 0 16px; } mat-paginator { background: #f5f5f5; border-radius: 4px; margin-bottom: 16px; }`]
})
export class PaginationsComponent {}
