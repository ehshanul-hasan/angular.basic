import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplicantListComponent } from './applicant-list.component';
import { ApplicantListRoutingModule } from './applicant-list-routing.module';
import { ApplicantService } from 'src/services/applicant.service';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ApplicantListComponent
  ],
  imports: [
    ApplicantListRoutingModule,
    CommonModule,
    NzTableModule,
    NzInputModule,
    NzPageHeaderModule,
    NzButtonModule,
    NzDividerModule,
    NzPopconfirmModule,
    NzMessageModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [ApplicantListComponent],
  providers: [
    ApplicantService
  ]
})
export class ApplicantListModule { }
