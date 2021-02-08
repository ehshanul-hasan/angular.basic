import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    LandingRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzDropDownModule,
    NzBreadCrumbModule,
    NzIconModule,
    NzAvatarModule,
    SharedModule
  ],
  exports: [LandingComponent],
  providers: [
  ]
})
export class LandingModule { }
