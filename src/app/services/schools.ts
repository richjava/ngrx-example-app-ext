import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { School } from '../models/school';


@Injectable()
export class SchoolsService {
  private API_PATH = 'http://localhost:4040/api/schools';

  constructor(private http: Http) {}

  searchSchools(queryTitle: string): Observable<School[]> {
    return this.http.get(`${this.API_PATH}?q=${queryTitle}`)   
      .map(res => res.json() || []);
  }

  retrieveSchool(schoolId: string): Observable<School> {
    return this.http.get(`${this.API_PATH}/${schoolId}`)
      .map(res => res.json());
  }
}
