import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicantListComponent } from './applicant-list.component';

const routes: Routes = [
  { path: '', component: ApplicantListComponent },
  { path: 'create', 
    loadChildren: () => import('../create/applicant-create.module').then(x => x.ApplicantCreateModule) 
  },
  { path: 'edit/:id', 
    loadChildren: () => import('../create/applicant-create.module').then(x => x.ApplicantCreateModule) 
  },
  { path: 'details/:id', 
    loadChildren: () => import('../details/applicant-details.module').then(x => x.ApplicantDetailsModule) 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantListRoutingModule { }
