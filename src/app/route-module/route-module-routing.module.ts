import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NotFoundComponent} from '../not-found/not-found.component';
import {HomeComponent} from '../home/home.component';

import { MapModule } from '../map/map.module';

const routes: Routes = [


  {
    path: '',
    component: HomeComponent,
    children: [

      {path: 'home', component: HomeComponent}
    ]
  },


  { path: 'map',  loadChildren: () => MapModule,},

  {path: '**', component: NotFoundComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteModuleRoutingModule { }
