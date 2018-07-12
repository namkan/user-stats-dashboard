import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { AppComponent } from './app.component';
import { AppsNavigationComponent } from './apps-navigation/apps-navigation.component';
import { AllDataComponent } from './all-data/all-data.component';
import { ActivitiesGraphComponent } from './activities-graph/activities-graph.component';
import { BehaviorGraphComponent } from './behavior-graph/behavior-graph.component';
import { DeviceUsageTableComponent } from './device-usage-table/device-usage-table.component';
import { TopEventsComponent } from './top-events/top-events.component';
import { AppRoutingModule } from './/app-routing.module';
import { SummaryComponent } from './summary/summary.component';
import { AComponent } from './a/a.component';
//import { DataService } from './all-data/data.service';

@NgModule({
  declarations: [
    AppComponent,
    AppsNavigationComponent,
    AllDataComponent,
    ActivitiesGraphComponent,
    BehaviorGraphComponent,
    DeviceUsageTableComponent,
    TopEventsComponent,
    SummaryComponent,
    AComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
