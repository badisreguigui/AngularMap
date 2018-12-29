import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FullCalendarModule} from 'ng-fullcalendar';
import { MapRoutingModule } from './map-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResourcecomponentComponent } from './resources/resourcecomponent/resourcecomponent.component';

@NgModule({
  imports: [
    CommonModule,
    MapRoutingModule,
    FullCalendarModule,
  ],
  declarations: [DashboardComponent]
})
export class MapModule { }
