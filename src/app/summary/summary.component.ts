import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as xyz from '../../../build/js/custom.js';
declare var xyz: any;

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  	console.log("ngOninit");
  	// xyz();
  }
  ngAfterViewInit(){
  	xyz();
  }
}
