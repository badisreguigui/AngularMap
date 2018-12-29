import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllMandatesComponent } from './all-mandates/all-mandates.component';

const routes: Routes = [{path:'allMandates',component:AllMandatesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MandateRoutingModule { }
