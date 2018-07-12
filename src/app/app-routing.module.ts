import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { AllDataComponent } from './all-data/all-data.component';
import { SummaryComponent } from './summary/summary.component';
//import { CanDeactivateGuard } from './can-deactivate-guard.service';
//import { AppDetailResolver } from './app-detail-resolver.service';

const routes: Routes = [
	{ path: 'summary', component:SummaryComponent},
	{ path: 'app/:appId',component:AllDataComponent},
	{ path: '', redirectTo: '/app/cov', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
	
}
