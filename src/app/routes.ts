import { Routes } from '@angular/router';

import { BookExistsGuard } from './guards/book-exists';
import { FindBookPageComponent } from './containers/books/find-book-page';
import { ViewBookPageComponent } from './containers/books/view-book-page';
import { CollectionPageComponent } from './containers/books/collection-page';

import { SchoolExistsGuard } from './guards/school-exists';
import { FindSchoolPageComponent } from './containers/schools/find-school-page';
import { ViewSchoolPageComponent } from './containers/schools/view-school-page';
import { SchoolCollectionPageComponent } from './containers/schools/school-collection-page';

import { NotFoundPageComponent } from './containers/not-found-page';

export const routes: Routes = [
  {
    path: '',
    component: CollectionPageComponent
  },
  {
    path: 'book/find',
    component: FindBookPageComponent
  },
  {
    path: 'book/:id',
    canActivate: [ BookExistsGuard ],
    component: ViewBookPageComponent
  },
  {
    path: 'school/collection',
    component: SchoolCollectionPageComponent
  },
  {
    path: 'school/find',
    component: FindSchoolPageComponent
  },
  {
    path: 'school/:id',
    canActivate: [ SchoolExistsGuard ],
    component: ViewSchoolPageComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];
