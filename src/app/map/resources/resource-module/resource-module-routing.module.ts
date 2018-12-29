import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllMandatesComponent} from '../../mandate/all-mandates/all-mandates.component';
import {ResourcecomponentComponent} from '../resourcecomponent/resourcecomponent.component';

const routes: Routes = [
  {path:'listResources',component:ResourcecomponentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourceModuleRoutingModule { }
