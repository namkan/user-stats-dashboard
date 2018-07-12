import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'device-usage-table',
  templateUrl: './device-usage-table.component.html',
  styleUrls: ['./device-usage-table.component.css']
})
export class DeviceUsageTableComponent implements OnInit {
	usageData: any;
	usageCanvas:any;
	ctx: any;
  constructor() { }

  ngOnInit() {
  	this.usageData = {
	    labels: ['J6','A6/A6+'],
	    datasets: [
	        {
	            data: [10, 4],
	            backgroundColor: [
	                "#FF6384",
	                "#36A2EB"
	            ],
	            hoverBackgroundColor: [
	                "#FF6384",
	                "#36A2EB"
	            ]
	        }]    
	    },
  	this.usageCanvas = document.getElementById("usageCanvas");
  	this.ctx  = this.usageCanvas.getContext('2d');
  	let usageGraph = new Chart(this.ctx,{
	  	type: 'doughnut',
	  	data: this.usageData,
	  	options: {
					startAngle: 0.5,
					legend: {
						position: 'top'
					}
				}
			});
	
}}