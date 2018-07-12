import { Component } from '@angular/core';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  async ngAfterViewInit() {
		// await this.loadScript('../build/js/my.js');
	}
   
 private loadScript(scriptUrl: string) {
   return new Promise((resolve, reject) => {
	 const scriptElement = document.createElement('script');
	 scriptElement.src = scriptUrl;
	 scriptElement.onload = resolve;
	 document.body.appendChild(scriptElement);
	})
 }
}
