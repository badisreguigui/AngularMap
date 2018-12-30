import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FullCalendarModule} from 'ng-fullcalendar';
import { ResourceModuleRoutingModule } from './resource-module-routing.module';
import {ResourcecomponentComponent} from '../resourcecomponent/resourcecomponent.component';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {DetailsResourceComponent} from '../details-resource/details-resource.component';
@NgModule({
  imports: [
    CommonModule,
    ResourceModuleRoutingModule,
    FullCalendarModule,

  ],
  declarations: [ResourcecomponentComponent,DashboardComponent,DetailsResourceComponent]
})
export class ResourceModuleModule { }
