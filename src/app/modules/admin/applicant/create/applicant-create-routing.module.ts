import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicantCreateComponent } from './applicant-create.component';

const routes: Routes = [
  { path: '', component: ApplicantCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantCreateRoutingModule { }
