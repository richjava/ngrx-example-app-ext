import { Component, Input } from '@angular/core';

import { School } from '../../models/school';


@Component({
  selector: 'bc-school-authors',
  template: `
  
  `,
  styles: [`
    h5 {
      margin-bottom: 5px;
    }
  `]
})
export class SchoolAuthorsComponent {
  @Input() school: School;

  // get authors() {
  //   return this.school.volumeInfo.authors;
  // }
}
