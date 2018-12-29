import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MandateRoutingModule } from './mandate-routing.module';
import { AllMandatesComponent } from './all-mandates/all-mandates.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MandateRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AllMandatesComponent]
})
export class MandateModule { }
