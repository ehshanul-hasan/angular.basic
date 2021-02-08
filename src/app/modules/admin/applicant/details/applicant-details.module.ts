import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplicantDetailsComponent } from './applicant-details.component';
import { ApplicantDetailsRoutingModule } from './applicant-details-routing.module';
import { ApplicantService } from 'src/services/applicant.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    ApplicantDetailsComponent
  ],
  imports: [
    ApplicantDetailsRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NzDescriptionsModule,
    NzCardModule,
    NzButtonModule
  ],
  exports: [ApplicantDetailsComponent],
  providers: [
    ApplicantService
  ]
})
export class ApplicantDetailsModule { }
