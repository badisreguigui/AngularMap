import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FullCalendarModule} from 'ng-fullcalendar';
import { ResourceModuleRoutingModule } from './resource-module-routing.module';
import {ResourcecomponentComponent} from '../resourcecomponent/resourcecomponent.component';

@NgModule({
  imports: [
    CommonModule,
    ResourceModuleRoutingModule,
    FullCalendarModule
  ],
  declarations: [ResourcecomponentComponent]
})
export class ResourceModuleModule { }
