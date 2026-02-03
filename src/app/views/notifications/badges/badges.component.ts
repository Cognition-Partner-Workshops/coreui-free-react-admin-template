import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-badges',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatBadgeModule, MatButtonModule, MatIconModule, MatChipsModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Badges</mat-card-title></mat-card-header>
      <mat-card-content>
        <p>Small count and labeling component.</p>
        <h3>Badge on Buttons</h3>
        <div class="badge-row">
          <button mat-raised-button matBadge="4" matBadgeColor="warn">Notifications</button>
          <button mat-raised-button color="primary" matBadge="8" matBadgeColor="accent">Messages</button>
          <button mat-icon-button matBadge="15" matBadgeColor="warn"><mat-icon>mail</mat-icon></button>
          <button mat-icon-button matBadge="3" matBadgeColor="primary"><mat-icon>shopping_cart</mat-icon></button>
        </div>
        <h3>Badge Positions</h3>
        <div class="badge-row">
          <button mat-raised-button matBadge="1" matBadgePosition="before">Before</button>
          <button mat-raised-button matBadge="2" matBadgePosition="after">After</button>
          <button mat-raised-button matBadge="3" matBadgePosition="above after">Above After</button>
          <button mat-raised-button matBadge="4" matBadgePosition="below before">Below Before</button>
        </div>
        <h3>Badge Sizes</h3>
        <div class="badge-row">
          <button mat-raised-button matBadge="1" matBadgeSize="small">Small</button>
          <button mat-raised-button matBadge="2" matBadgeSize="medium">Medium</button>
          <button mat-raised-button matBadge="3" matBadgeSize="large">Large</button>
        </div>
        <h3>Chips (Alternative Badges)</h3>
        <mat-chip-set>
          <mat-chip>Default</mat-chip>
          <mat-chip color="primary" highlighted>Primary</mat-chip>
          <mat-chip color="accent" highlighted>Accent</mat-chip>
          <mat-chip color="warn" highlighted>Warn</mat-chip>
        </mat-chip-set>
        <h3>Chips with Icons</h3>
        <mat-chip-set>
          <mat-chip><mat-icon matChipAvatar>face</mat-icon>John</mat-chip>
          <mat-chip><mat-icon matChipAvatar>face</mat-icon>Jane</mat-chip>
          <mat-chip><mat-icon matChipAvatar>face</mat-icon>Bob</mat-chip>
        </mat-chip-set>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`h3 { margin: 24px 0 16px; } .badge-row { display: flex; gap: 16px; flex-wrap: wrap; align-items: center; margin-bottom: 16px; }`]
})
export class BadgesComponent {}
