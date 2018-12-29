import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MandateRoutingModule } from './mandate-routing.module';
import { AllMandatesComponent } from './all-mandates/all-mandates.component';

@NgModule({
  imports: [
    CommonModule,
    MandateRoutingModule
  ],
  declarations: [AllMandatesComponent]
})
export class MandateModule { }
