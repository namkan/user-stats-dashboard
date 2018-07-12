import { Injectable } from '@angular/core';
import {App} from '../app';
import {APPS} from '../mock-apps';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {


  constructor() { }
  getAppData(): Observable<App[]> {
    // TODO: send the message _after_ fetching the heroes
    return of(APPS);
  }
  getApp(id: string) {
    console.log("in me");
    return this.getAppData().pipe(
      map(app=> app.find(app => app.id === id))
    );
  }
}
