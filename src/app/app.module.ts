import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FullCalendarModule} from 'ng-fullcalendar';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import {RouteModuleRoutingModule} from './route-module/route-module-routing.module';
import {NotFoundComponent} from './not-found/not-found.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular5-social-login";
import {StorageServiceModule} from 'angular-webstorage-service';
import {HttpClientModule} from '@angular/common/http';


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
    FullCalendarModule,
    SocialLoginModule,
    HttpClientModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
