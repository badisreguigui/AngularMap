import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MandateRoutingModule } from './mandate-routing.module';
import { AllMandatesComponent } from './all-mandates/all-mandates.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HistoriqueComponent } from './historique/historique.component';

@NgModule({
  imports: [
    CommonModule,
    MandateRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AllMandatesComponent, HistoriqueComponent]
})
export class MandateModule { }
