import { Component, Input } from '@angular/core';
import { School } from '../../models/school';

@Component({
  selector: 'bc-school-preview-list',
  template: `
    <bc-school-preview *ngFor="let school of schools" [school]="school"></bc-school-preview>
  `,
  styles: [`
    :host {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  `]
})
export class SchoolPreviewListComponent {
  @Input() schools: School[];
}
