import { Injectable } from '@angular/core';
import {App} from './app';
import {APPS} from './mock-apps';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  getApps(): Observable<App[]> {
    // TODO: send the message _after_ fetching the heroes
    return of(APPS);
  }
  getApp(id: number | string) {
    return this.getApps().pipe(
      map(crises => crises.find(app => app.id === id))
    );
  }
}
