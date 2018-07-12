import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
//import { switchMap } from 'rxjs/operators';
//import { DataService } from './data.service';
//import {App} from '../app';
//import { Observable } from 'rxjs';
//import {UIChart} from 'primeng/primeng';
import { Chart } from 'chart.js';

@Component({
  selector: 'all-data',
  templateUrl: './all-data.component.html',
  styleUrls: ['./all-data.component.css']
})
export class AllDataComponent implements OnInit,  AfterViewInit {
	activityData : any;
	//behaviorData: any;
	//app$: Observable<App>;
	activityChart: any;
	behaviorChart: any;
	bChart : any;
	aChart: any;
	ctx: any; ctx1: any;
	dataset: any = {
	  	datasets: [
				{
					label: 'J6',
					data: [14.02, 18.36, 17.68, 19.21, 19.20, 18.63, 19.53, 19.09, 18.91, 18.35, 18.15, 17.85, 17.83, 18.14, 18.11, 18.15, 18.05,
								 18.17, 17.94, 17.82, 18.07, 17.84, 17.82, 17.34, 17.75, 16.85, 16.23, 16.71, 17.04, 17.44, 16.93, 17.07, 17.41],
	        fill: false,
	        borderColor: '#3cba9f'
				},
				{
	        label: 'A6 / A6+',
	        data: [14.00, 16.66, 15.47, 18.82, 18.23, 18.03, 19.57, 19.97, 20.08, 19.43, 18.80, 19.74, 19.40, 19.25, 19.62, 19.65, 
	        			 19.01, 19.84, 19.27, 19.65, 19.63, 19.31, 19.08, 19.35, 19.60, 18.48, 17.97, 18.76, 18.59, 18.65, 18.56, 19.00, 19.01],
	        fill: false,
	        borderColor: '#ffcc00'
	    	}
	    ],
	    labels: ['23 May','24 May','25 May','26 May','27 May','28 May','29 May','30 May','31 May','1 June','2 June','3 June','4 June',
	    				'5 June','6 June','7 June','8 June','9 June','10 June','11 June','12 June','13 June','14 June','15 June','16 June','17 June',
	    				'18 June','19 June','20 June','21 June','22 June','23 June','24 June', ]
		};
		activityOptions:any = {
        legend: {
          display: true,
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        },
      };
	behaviorData: any = {
			labels: ['Returning Users', 'New Users'],
			datasets: [
				{
					data: [15, 85],
					backgroundColor: [
						"#FF6384",
	          "#36A2EB"
						],
					hoverBackgroundColor: [
						"#FF6384",
	          "#36A2EB"
					]
				}
			],
		};
  constructor() { 
  	//console.log("constructor")
  }

  ngOnInit() {
  	//console.log("ngOnInit");
  	// this.app$ = this.route.paramMap.pipe(
   //  	switchMap((params: ParamMap) => {
   //  		console.log("i am");
   //  		return this.dataService.getApp(params.get('appId'))
  	//   }))
  	this.getData();
  }

  ngOnChanges(){
  	//console.log("ngOnChanges")
  }
  
  ngDoCheck() {
   	//console.log("ngDoCheck");

  }

  ngAfterContentInit() {
    //console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    //console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
   // console.log("ngAfterViewInit");
    // this.getData();
    

  }

  ngAfterViewChecked() {
    //console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    //console.log("ngOnDestroy");
  }
  getData(){
		console.log("getting data");
		this.aChart = document.getElementById('canvas');
		this.ctx = this.aChart.getContext('2d');
		// console.log(this.ctx);		
		this.activityChart = new Chart(this.ctx, {
      type: 'line',
      data: this.dataset,
      options: this.activityOptions
    });
		
    this.bChart = document.getElementById("behaviorChart");
    this.ctx1 = this.bChart.getContext('2d');
		this.behaviorChart = new Chart(this.ctx1, {
  	type: 'pie',
  	data: this.behaviorData,
  	options: {
				startAngle: 0.5,
				legend: {
					position: 'left'
				}
			}
		});
		}

	getDaily(){
		this.dataset = {
	  	datasets: [
				{
					label: 'J6',
					data: [14.02, 18.36, 17.68, 19.21, 19.20, 18.63, 19.53, 19.09, 18.91, 18.35, 18.15, 17.85, 17.83, 18.14, 18.11, 18.15, 18.05,
								 18.17, 17.94, 17.82, 18.07, 17.84, 17.82, 17.34, 17.75, 16.85, 16.23, 16.71, 17.04, 17.44, 16.93, 17.07, 17.41],
	        fill: false,
	        borderColor: '#3cba9f'
				},
				{
	        label: 'A6 / A6+',
	        data: [14.00, 16.66, 15.47, 18.82, 18.23, 18.03, 19.57, 19.97, 20.08, 19.43, 18.80, 19.74, 19.40, 19.25, 19.62, 19.65, 
	        			 19.01, 19.84, 19.27, 19.65, 19.63, 19.31, 19.08, 19.35, 19.60, 18.48, 17.97, 18.76, 18.59, 18.65, 18.56, 19.00, 19.01],
	        fill: false,
	        borderColor: '#ffcc00'
	    	}
	    ],
	    labels: ['23 May','24 May','25 May','26 May','27 May','28 May','29 May','30 May','31 May','1 June','2 June','3 June','4 June',
	    				'5 June','6 June','7 June','8 June','9 June','10 June','11 June','12 June','13 June','14 June','15 June','16 June','17 June',
	    				'18 June','19 June','20 June','21 June','22 June','23 June','24 June', ]
		}
		this.activityChart.data = this.dataset;
		this.activityChart.update();
	}
	getWeekly(){
		this.dataset = {
	  	datasets: [
				{
					label: 'J6',
					data: [30.09, 35.52, 36.70, 36.70, 36.24],
	        fill: false,
	        borderColor: '#3cba9f'
				},
				{
	        label: 'A6 / A6+',
	        data: [30.12, 38.47,40.10, 40.53, 39.95],
	        fill: false,
	        borderColor: '#ffcc00'
	    	}
	    ],
	    labels: ['Week 21','Week 22','Week 23','Week 24','Week 25']
		}
		this.activityChart.data = this.dataset;
		this.activityChart.update();
	}
}

