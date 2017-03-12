import { Routes, RouterModule } from '@angular/router';
import { ListPageComponent } from './component/list-page/list-page.component';
import { DetailsPageComponent } from './component/details-page/details-page.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'list/:listName', component: ListPageComponent },
  { path: 'details/:Id', component: DetailsPageComponent }
];

export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(appRoutes,{useHash:true});