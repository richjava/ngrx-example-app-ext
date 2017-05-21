import 'rxjs/add/operator/let';
import 'rxjs/add/operator/take';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../reducers';
import * as school from '../../actions/school';
import { School } from '../../models/school';


@Component({
  selector: 'bc-find-school-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bc-school-search [query]="searchQuery$ | async" [searching]="loading$ | async" (search)="search($event)"></bc-school-search>
    <bc-school-preview-list [schools]="schools$ | async"></bc-school-preview-list>
  `
})
export class FindSchoolPageComponent {
  searchQuery$: Observable<string>;
  schools$: Observable<School[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.searchQuery$ = store.select(fromRoot.getSchoolSearchQuery).take(1);
    this.schools$ = store.select(fromRoot.getSchoolSearchResults);
    this.loading$ = store.select(fromRoot.getSchoolSearchLoading);
  }

  search(query: string) {
    this.store.dispatch(new school.SearchAction(query));
  }
}
