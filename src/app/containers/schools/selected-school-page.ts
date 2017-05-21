import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../reducers';
import * as schoolCollection from '../../actions/school-collection';
import { School } from '../../models/school';


@Component({
  selector: 'bc-selected-school-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bc-school-detail
      [school]="school$ | async"
      [inSchoolsCollection]="isSelectedSchoolInCollection$ | async"
      (addSchool)="addToCollection($event)"
      (removeSchool)="removeFromCollection($event)">
    </bc-school-detail>
  `
})
export class SelectedSchoolPageComponent {
  school$: Observable<School>;
  isSelectedSchoolInCollection$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.school$ = store.select(fromRoot.getSelectedSchool);
    this.isSelectedSchoolInCollection$ = store.select(fromRoot.isSelectedSchoolInCollection);
  }

  addToCollection(school: School) {
    this.store.dispatch(new schoolCollection.AddSchoolAction(school));
  }

  removeFromCollection(school: School) {
    this.store.dispatch(new schoolCollection.RemoveSchoolAction(school));
  }
}
