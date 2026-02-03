import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, MatSortModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Tables</mat-card-title></mat-card-header>
      <mat-card-content>
        <p>Tables display sets of data across rows and columns.</p>
        <h3>Basic Table</h3>
        <table mat-table [dataSource]="dataSource" class="mat-elevation-z2">
          <ng-container matColumnDef="position"><th mat-header-cell *matHeaderCellDef>#</th><td mat-cell *matCellDef="let element">{{element.position}}</td></ng-container>
          <ng-container matColumnDef="name"><th mat-header-cell *matHeaderCellDef>Name</th><td mat-cell *matCellDef="let element">{{element.name}}</td></ng-container>
          <ng-container matColumnDef="weight"><th mat-header-cell *matHeaderCellDef>Weight</th><td mat-cell *matCellDef="let element">{{element.weight}}</td></ng-container>
          <ng-container matColumnDef="symbol"><th mat-header-cell *matHeaderCellDef>Symbol</th><td mat-cell *matCellDef="let element">{{element.symbol}}</td></ng-container>
          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
        </table>
        <h3>Striped Table</h3>
        <table mat-table [dataSource]="dataSource" class="striped-table">
          <ng-container matColumnDef="position"><th mat-header-cell *matHeaderCellDef>#</th><td mat-cell *matCellDef="let element">{{element.position}}</td></ng-container>
          <ng-container matColumnDef="name"><th mat-header-cell *matHeaderCellDef>Name</th><td mat-cell *matCellDef="let element">{{element.name}}</td></ng-container>
          <ng-container matColumnDef="weight"><th mat-header-cell *matHeaderCellDef>Weight</th><td mat-cell *matCellDef="let element">{{element.weight}}</td></ng-container>
          <ng-container matColumnDef="symbol"><th mat-header-cell *matHeaderCellDef>Symbol</th><td mat-cell *matCellDef="let element">{{element.symbol}}</td></ng-container>
          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
        </table>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    h3 { margin: 24px 0 16px; }
    table { width: 100%; margin-bottom: 24px; }
    .striped-table tr:nth-child(even) { background: #f5f5f5; }
  `]
})
export class TablesComponent {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' }
  ];
}
