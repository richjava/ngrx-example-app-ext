import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Database } from '@ngrx/db';
import { Observable } from 'rxjs/Observable';
import { defer } from 'rxjs/observable/defer';
import { of } from 'rxjs/observable/of';

import * as schoolsCollection from '../actions/school-collection';
import { School } from '../models/school';


@Injectable()
export class SchoolCollectionEffects {

  /**
   * This effect does not yield any actions back to the store. Set
   * `dispatch` to false to hint to @ngrx/effects that it should
   * ignore any elements of this effect stream.
   *
   * The `defer` observable accepts an observable factory function
   * that is called when the observable is subscribed to.
   * Wrapping the database open call in `defer` makes
   * effect easier to test.
   */
  @Effect({ dispatch: false })
  openDB$: Observable<any> = defer(() => {
    return this.db.open('books_app');
  });

  /**
   * This effect makes use of the `startWith` operator to trigger
   * the effect immediately on startup.
   */
  @Effect()
  loadCollection$: Observable<Action> = this.actions$
    .ofType(schoolsCollection.LOAD)
    .startWith(new schoolsCollection.LoadAction())
    .switchMap(() =>
      this.db.query('schools')
        .toArray()
        .map((schools: School[]) => new schoolsCollection.LoadSuccessAction(schools))
        .catch(error => of(new schoolsCollection.LoadFailAction(error)))
    );

  @Effect()
  addSchoolToCollection$: Observable<Action> = this.actions$
    .ofType(schoolsCollection.ADD_SCHOOL)
    .map((action: schoolsCollection.AddSchoolAction) => action.payload)
    .mergeMap(school =>
      this.db.insert('schools', [ school ])
        .map(() => new schoolsCollection.AddSchoolSuccessAction(school))
        .catch(() => of(new schoolsCollection.AddSchoolFailAction(school)))
    );


  @Effect()
  removeSchoolFromCollection$: Observable<Action> = this.actions$
    .ofType(schoolsCollection.REMOVE_SCHOOL)
    .map((action: schoolsCollection.RemoveSchoolAction) => action.payload)
    .mergeMap(book =>
      this.db.executeWrite('books', 'delete', [ book._id ])
        .map(() => new schoolsCollection.RemoveSchoolSuccessAction(book))
        .catch(() => of(new schoolsCollection.RemoveSchoolFailAction(book)))
    );

    constructor(private actions$: Actions, private db: Database) { }
}
