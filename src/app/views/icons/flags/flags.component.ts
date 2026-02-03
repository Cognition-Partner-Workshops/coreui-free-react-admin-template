import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-flags',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <mat-card>
      <mat-card-header><mat-card-title>Flags</mat-card-title></mat-card-header>
      <mat-card-content>
        <p>Country flags can be displayed using emoji flags or flag icon libraries.</p>
        <div class="flags-grid">
          @for (flag of flags; track flag.code) {
            <div class="flag-item">
              <span class="flag-emoji">{{ flag.emoji }}</span>
              <span class="flag-name">{{ flag.name }}</span>
              <span class="flag-code">{{ flag.code }}</span>
            </div>
          }
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .flags-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 16px; }
    .flag-item { display: flex; flex-direction: column; align-items: center; padding: 16px; background: #f5f5f5; border-radius: 8px; }
    .flag-emoji { font-size: 48px; margin-bottom: 8px; }
    .flag-name { font-size: 14px; font-weight: 500; }
    .flag-code { font-size: 12px; color: rgba(0,0,0,0.5); }
  `]
})
export class FlagsComponent {
  flags = [
    { name: 'United States', code: 'US', emoji: '🇺🇸' },
    { name: 'United Kingdom', code: 'GB', emoji: '🇬🇧' },
    { name: 'Canada', code: 'CA', emoji: '🇨🇦' },
    { name: 'Germany', code: 'DE', emoji: '🇩🇪' },
    { name: 'France', code: 'FR', emoji: '🇫🇷' },
    { name: 'Spain', code: 'ES', emoji: '🇪🇸' },
    { name: 'Italy', code: 'IT', emoji: '🇮🇹' },
    { name: 'Japan', code: 'JP', emoji: '🇯🇵' },
    { name: 'China', code: 'CN', emoji: '🇨🇳' },
    { name: 'India', code: 'IN', emoji: '🇮🇳' },
    { name: 'Brazil', code: 'BR', emoji: '🇧🇷' },
    { name: 'Australia', code: 'AU', emoji: '🇦🇺' },
    { name: 'Mexico', code: 'MX', emoji: '🇲🇽' },
    { name: 'South Korea', code: 'KR', emoji: '🇰🇷' },
    { name: 'Russia', code: 'RU', emoji: '🇷🇺' },
    { name: 'Netherlands', code: 'NL', emoji: '🇳🇱' }
  ];
}
