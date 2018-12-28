import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NotFoundComponent} from '../not-found/not-found.component';
import {HomeComponent} from '../home/home.component';
import {DashboardComponent} from '../dashboard/dashboard.component';

const routes: Routes = [


  {
    path: '',
    component: HomeComponent,
    children: [
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: 'home', component: HomeComponent}
    ]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
    ]
  },

  {path: '**', component: NotFoundComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteModuleRoutingModule { }
