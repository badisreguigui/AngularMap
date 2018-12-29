import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllMandatesComponent } from './all-mandates/all-mandates.component';
import { HistoriqueComponent } from './historique/historique.component';

const routes: Routes = [{path:'allMandates',component:AllMandatesComponent},
{path:'historique',component:HistoriqueComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MandateRoutingModule { }
