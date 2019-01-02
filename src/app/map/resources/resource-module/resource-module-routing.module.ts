import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllMandatesComponent} from '../../mandate/all-mandates/all-mandates.component';
import {ResourcecomponentComponent} from '../resourcecomponent/resourcecomponent.component';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {DetailsResourceComponent} from '../details-resource/details-resource.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {path: '', component: ResourcecomponentComponent, pathMatch: 'full'},
      {path: 'listResources', component: ResourcecomponentComponent,},
      {path: 'detailsResource', component: DetailsResourceComponent,},

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourceModuleRoutingModule { }
