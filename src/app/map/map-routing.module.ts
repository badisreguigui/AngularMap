import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MandateModule } from './mandate/mandate.module';
import {ResourceRequestComponent} from './resource-request/resource-request.component';
import {ChatComponent} from './chat/chat.component';
import {ResourceModuleModule} from './resources/resource-module/resource-module.module';

const routes: Routes = [
  { path: 'mandate',  loadChildren: () => MandateModule,},
  { path: 'resources',  loadChildren: () => ResourceModuleModule,},

  {
    path: '',
    component: DashboardComponent,
    children: [
      {path: '', component: ResourceRequestComponent, pathMatch: 'full'},
      {path: 'home', component: ResourceRequestComponent},

    ]
  },
  {
    path: '',
    component: ChatComponent,
    children: [
      {path: 'chat', component: ChatComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule { }
