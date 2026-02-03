import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-typography',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <div class="typography-page">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Typography</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <h2>Headings</h2>
          <div class="typography-example">
            <h1>h1. Heading</h1>
            <h2>h2. Heading</h2>
            <h3>h3. Heading</h3>
            <h4>h4. Heading</h4>
            <h5>h5. Heading</h5>
            <h6>h6. Heading</h6>
          </div>
          
          <h2>Display Headings</h2>
          <div class="typography-example">
            <h1 class="display-1">Display 1</h1>
            <h1 class="display-2">Display 2</h1>
            <h1 class="display-3">Display 3</h1>
            <h1 class="display-4">Display 4</h1>
          </div>
          
          <h2>Inline Text Elements</h2>
          <div class="typography-example">
            <p>You can use the mark tag to <mark>highlight</mark> text.</p>
            <p><del>This line of text is meant to be treated as deleted text.</del></p>
            <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
            <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
            <p><u>This line of text will render as underlined.</u></p>
            <p><small>This line of text is meant to be treated as fine print.</small></p>
            <p><strong>This line rendered as bold text.</strong></p>
            <p><em>This line rendered as italicized text.</em></p>
          </div>
          
          <h2>Blockquotes</h2>
          <div class="typography-example">
            <blockquote>
              <p>A well-known quote, contained in a blockquote element.</p>
              <footer>Someone famous in <cite>Source Title</cite></footer>
            </blockquote>
          </div>
          
          <h2>Lists</h2>
          <div class="typography-example lists">
            <div>
              <h4>Unordered List</h4>
              <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
              </ul>
            </div>
            <div>
              <h4>Ordered List</h4>
              <ol>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
              </ol>
            </div>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .typography-page {
      max-width: 1200px;
    }
    
    h2 {
      margin: 32px 0 16px;
      padding-bottom: 8px;
      border-bottom: 1px solid #e0e0e0;
    }
    
    .typography-example {
      padding: 24px;
      background: #f5f5f5;
      border-radius: 8px;
      margin-bottom: 16px;
    }
    
    .display-1 { font-size: 6rem; font-weight: 300; }
    .display-2 { font-size: 5.5rem; font-weight: 300; }
    .display-3 { font-size: 4.5rem; font-weight: 300; }
    .display-4 { font-size: 3.5rem; font-weight: 300; }
    
    blockquote {
      padding: 16px 24px;
      border-left: 4px solid #1976d2;
      background: white;
      margin: 0;
    }
    
    blockquote footer {
      color: rgba(0,0,0,0.54);
      font-size: 14px;
      margin-top: 8px;
    }
    
    .lists {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    
    @media (max-width: 600px) {
      .lists {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class TypographyComponent {}
