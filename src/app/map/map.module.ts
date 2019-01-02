import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResourceRequestComponent } from './resource-request/resource-request.component';
import { ChatComponent } from './chat/chat.component';
import { FilterPipe } from './filter.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SpeechModule} from 'ngx-speech';
import {NgxSmartModalModule} from 'ngx-smart-modal';
import { MessageComponent } from './message/message.component';


@NgModule({
  imports: [
    CommonModule,
    MapRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SpeechModule,
    NgxSmartModalModule.forRoot(),
  ],
  providers: [{ provide: 'SPEECH_LANG', useValue: 'en-US' }, ],
  declarations: [DashboardComponent, ResourceRequestComponent, ChatComponent, FilterPipe, MessageComponent],

})
export class MapModule { }
