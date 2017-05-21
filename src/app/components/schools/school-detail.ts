import { Component, Input, Output, EventEmitter } from '@angular/core';
import { School } from '../../models/school';


@Component({
  selector: 'bc-school-detail',
  template: `
    <md-card *ngIf="school">
      <md-card-title-group>
        <md-card-title>{{ name }}</md-card-title>
      </md-card-title-group>
      <md-card-content>
        <p [innerHtml]="description"></p>
      </md-card-content>
      <md-card-footer class="footer">
        <bc-school-authors [school]="school"></bc-school-authors>
      </md-card-footer>
      <md-card-actions align="start">
        <button md-raised-button color="warn" *ngIf="inSchoolsCollection" (click)="removeSchool.emit(school)">
        Remove School from Collection
        </button>

        <button md-raised-button color="primary" *ngIf="!inSchoolsCollection" (click)="addSchool.emit(school)">
        Add School to Collection
        </button>
      </md-card-actions>
    </md-card>

  `,
  styles: [`
    :host {
      display: flex;
      justify-content: center;
      margin: 75px 0;
    }
    md-card {
      max-width: 600px;
    }
    md-card-title-group {
      margin-left: 0;
    }
    img {
      width: 60px;
      min-width: 60px;
      margin-left: 5px;
    }
    md-card-content {
      margin: 15px 0 50px;
    }
    md-card-actions {
      margin: 25px 0 0 !important;
    }
    md-card-footer {
      padding: 0 25px 25px;
      position: relative;
    }
  `]
})
export class SchoolDetailComponent {
  /**
   * Presentational components receieve data through @Input() and communicate events
   * through @Output() but generally maintain no internal state of their
   * own. All decisions are delegated to 'container', or 'smart'
   * components before data updates flow back down.
   *
   * More on 'smart' and 'presentational' components: https://gist.github.com/btroncone/a6e4347326749f938510#utilizing-container-components
   */
  @Input() school: School;
  @Input() inSchoolsCollection: boolean;
  @Output() addSchool = new EventEmitter<School>();
  @Output() removeSchool = new EventEmitter<School>();


  /**
   * Tip: Utilize getters to keep templates clean
   */
  get _id() {
    return this.school._id;
  }

  get name() {
    return this.school.name;
  }

  // get subtitle() {
  //   return this.school.volumeInfo.subtitle;
  // }

  get description() {
    return this.school.description;
  }

  // get thumbnail() {
  //   return this.school.volumeInfo.imageLinks
  //     && this.book.volumeInfo.imageLinks.smallThumbnail;
  // }
}
