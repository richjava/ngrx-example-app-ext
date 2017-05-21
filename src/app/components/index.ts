import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BookAuthorsComponent } from './books/book-authors';
import { BookDetailComponent } from './books/book-detail';
import { BookPreviewComponent } from './books/book-preview';
import { BookPreviewListComponent } from './books/book-preview-list';
import { BookSearchComponent } from './books/book-search';

import { SchoolAuthorsComponent } from './schools/school-authors';
import { SchoolDetailComponent } from './schools/school-detail';
import { SchoolPreviewComponent } from './schools/school-preview';
import { SchoolPreviewListComponent } from './schools/school-preview-list';
import { SchoolSearchComponent } from './schools/school-search';

import { LayoutComponent } from './layout';
import { NavItemComponent } from './nav-item';
import { SidenavComponent } from './sidenav';
import { ToolbarComponent } from './toolbar';


import { PipesModule } from '../pipes';


export const COMPONENTS = [
  BookAuthorsComponent,
  BookDetailComponent,
  BookPreviewComponent,
  BookPreviewListComponent,
  BookSearchComponent,

  SchoolAuthorsComponent,
  SchoolDetailComponent,
  SchoolPreviewComponent,
  SchoolPreviewListComponent,
  SchoolSearchComponent,

  LayoutComponent,
  NavItemComponent,
  SidenavComponent,
  ToolbarComponent,
];


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    PipesModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule { }
