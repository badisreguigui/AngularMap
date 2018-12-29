import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllMandatesComponent } from './all-mandates/all-mandates.component';
import { HistoriqueComponent } from './historique/historique.component';
import { RequestsComponent } from './requests/requests.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
{path:'allMandates',component:AllMandatesComponent},
{path:'historique',component:HistoriqueComponent},
{path:'requests',component:RequestsComponent},
{path:'resources/:profil/:years/:id/:start/:end',component:ResourcesComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MandateRoutingModule { }
