import 'rxjs/add/operator/let';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../reducers';
import { School } from '../../models/school';


@Component({
  selector: 'bc-school-collection-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <md-card>
      <md-card-title>My School Collection</md-card-title>
    </md-card>

    <bc-school-preview-list [schools]="schools$ | async"></bc-school-preview-list>
  `,
  /**
   * Container components are permitted to have just enough styles
   * to bring the view together. If the number of styles grow,
   * consider breaking them out into presentational
   * components.
   */
  styles: [`
    md-card-title {
      display: flex;
      justify-content: center;
    }
  `]
})
export class SchoolCollectionPageComponent {
  schools$: Observable<School[]>;

  constructor(store: Store<fromRoot.State>) {
    this.schools$ = store.select(fromRoot.getSchoolCollection);
  }
}
