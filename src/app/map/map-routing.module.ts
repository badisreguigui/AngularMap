import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MandateModule } from './mandate/mandate.module';
import {ResourceModuleModule} from './resources/resource-module/resource-module.module';

const routes: Routes = [{path:'',component:DashboardComponent},
{ path: 'mandate',  loadChildren: () => MandateModule,},
  { path: 'resources',  loadChildren: () => ResourceModuleModule,}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule { }
