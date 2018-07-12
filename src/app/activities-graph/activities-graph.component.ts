import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'activities-graph',
  templateUrl: './activities-graph.component.html',
  styleUrls: ['./activities-graph.component.css']
})
export class ActivitiesGraphComponent implements OnInit {
	title = 'mygraph';
	@Input('ActivityData') data: any;
  constructor() { 
}
  ngOnInit() {
  	console.log(this.data);
  }
}
