import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import {RouteModuleRoutingModule} from './route-module/route-module-routing.module';
import {NotFoundComponent} from './not-found/not-found.component';

import {StorageServiceModule} from 'angular-webstorage-service';
import {HttpClientModule} from '@angular/common/http';
import {SpeechModule} from 'ngx-speech';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,



  ],
  imports: [
    BrowserModule,
    RouteModuleRoutingModule,
    RouterModule,
    StorageServiceModule,
    HttpClientModule,
    SpeechModule,
    FormsModule,
    ReactiveFormsModule,



  ],
  providers: [{ provide: 'SPEECH_LANG', useValue: 'en-US' },],
  bootstrap: [AppComponent],

})
export class AppModule { }
