import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatExpansionModule],
  template: `
    <div class="accordion-page">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Accordion</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>Angular Material expansion panels provide a way to show and hide content.</p>
          
          <h3>Basic Accordion</h3>
          <mat-accordion>
            <mat-expansion-panel>
              <mat-expansion-panel-header>
                <mat-panel-title>Accordion Item #1</mat-panel-title>
              </mat-expansion-panel-header>
              <p>This is the content for the first accordion item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
            </mat-expansion-panel>
            <mat-expansion-panel>
              <mat-expansion-panel-header>
                <mat-panel-title>Accordion Item #2</mat-panel-title>
              </mat-expansion-panel-header>
              <p>This is the content for the second accordion item. Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.</p>
            </mat-expansion-panel>
            <mat-expansion-panel>
              <mat-expansion-panel-header>
                <mat-panel-title>Accordion Item #3</mat-panel-title>
              </mat-expansion-panel-header>
              <p>This is the content for the third accordion item. Aliquam egestas arcu nec enim varius, in consectetur libero ultricies.</p>
            </mat-expansion-panel>
          </mat-accordion>
          
          <h3>Accordion with Description</h3>
          <mat-accordion>
            <mat-expansion-panel>
              <mat-expansion-panel-header>
                <mat-panel-title>Personal data</mat-panel-title>
                <mat-panel-description>Type your name and age</mat-panel-description>
              </mat-expansion-panel-header>
              <p>Content for personal data section.</p>
            </mat-expansion-panel>
            <mat-expansion-panel>
              <mat-expansion-panel-header>
                <mat-panel-title>Destination</mat-panel-title>
                <mat-panel-description>Type the country name</mat-panel-description>
              </mat-expansion-panel-header>
              <p>Content for destination section.</p>
            </mat-expansion-panel>
            <mat-expansion-panel>
              <mat-expansion-panel-header>
                <mat-panel-title>Day of the trip</mat-panel-title>
                <mat-panel-description>Inform the date you wish to travel</mat-panel-description>
              </mat-expansion-panel-header>
              <p>Content for trip date section.</p>
            </mat-expansion-panel>
          </mat-accordion>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .accordion-page { max-width: 800px; }
    h3 { margin: 24px 0 16px; }
    mat-accordion { display: block; margin-bottom: 24px; }
  `]
})
export class AccordionComponent {}
