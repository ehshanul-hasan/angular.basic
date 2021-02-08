import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplicantCreateComponent } from './applicant-create.component';
import { ApplicantCreateRoutingModule } from './applicant-create-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ApplicantService } from 'src/services/applicant.service';

@NgModule({
  declarations: [
    ApplicantCreateComponent
  ],
  imports: [
    ApplicantCreateRoutingModule,
    CommonModule,
    FormsModule,
    NzFormModule,
    NzInputModule,
    NzCheckboxModule,
    NzCardModule,
    NzButtonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [ApplicantCreateComponent],
  providers: [
    ApplicantService
  ]
})
export class ApplicantCreateModule { }
