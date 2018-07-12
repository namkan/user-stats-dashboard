import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'behavior-graph',
  templateUrl: './behavior-graph.component.html',
  styleUrls: ['./behavior-graph.component.css']
})
export class BehaviorGraphComponent implements OnInit {
	@Input('BehaviorData') data: any;
  constructor() {}

  ngOnInit() {
  	
  }

}
