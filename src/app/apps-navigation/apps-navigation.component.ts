import { Component, OnInit } from '@angular/core';
import {App} from '../app'
import {AppService} from '../app.service';

@Component({
  selector: 'apps-navigation',
  templateUrl: './apps-navigation.component.html',
  styleUrls: ['./apps-navigation.component.css']
})
export class AppsNavigationComponent implements OnInit {
	apps: App[];
  constructor(private appService: AppService) { }

  ngOnInit() {
  	this.getApps();
  }
  getApps():void {
  	this.appService.getApps()
        .subscribe(apps => this.apps = apps);
  }
}
