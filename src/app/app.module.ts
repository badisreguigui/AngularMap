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
import {ScModalModule} from 'angular-5-popup';
import {FullCalendarModule} from 'ng-fullcalendar';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular5-social-login";
import {MapModule} from './map/map.module';


export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("2147449098852278")
      },
    ],
  );
  return config;
}

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
    ScModalModule,
    FullCalendarModule,
    SocialLoginModule,




  ],
  providers: [{ provide:AuthServiceConfig,
              useFactory: getAuthServiceConfigs },],
  bootstrap: [AppComponent],

})
export class AppModule { }
