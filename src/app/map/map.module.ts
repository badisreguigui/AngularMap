import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FullCalendarModule} from 'ng-fullcalendar';
import { MapRoutingModule } from './map-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResourcecomponentComponent } from './resources/resourcecomponent/resourcecomponent.component';
import { DetailsResourceComponent } from './resources/details-resource/details-resource.component';
import {FormsModule} from '@angular/forms';
import {ScModalModule} from 'angular-5-popup';
import { FilterPipe } from './resources/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    MapRoutingModule,
    FullCalendarModule,
    FormsModule,
    ScModalModule,

  ],
  declarations: []
})
export class MapModule { }
