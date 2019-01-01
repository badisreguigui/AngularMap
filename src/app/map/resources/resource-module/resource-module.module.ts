import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FullCalendarModule} from 'ng-fullcalendar';
import { ResourceModuleRoutingModule } from './resource-module-routing.module';
import {ResourcecomponentComponent} from '../resourcecomponent/resourcecomponent.component';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {DetailsResourceComponent} from '../details-resource/details-resource.component';
import {FormsModule} from '@angular/forms';
import {ScModalModule} from 'angular-5-popup';
import {NgxSmartModalModule} from 'ngx-smart-modal';
import { FilterPipe} from '../filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    ResourceModuleRoutingModule,
    FullCalendarModule,
    FormsModule,
    ScModalModule,
    NgxSmartModalModule,


  ],
  declarations: [ResourcecomponentComponent,DashboardComponent,DetailsResourceComponent,FilterPipe]
})
export class ResourceModuleModule { }
