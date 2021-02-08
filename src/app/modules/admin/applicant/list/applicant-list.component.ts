import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ListUtil } from 'src/model/common/list-utility.model';
import { ApplicantService } from 'src/services/applicant.service';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css']
})
export class ApplicantListComponent {
  
  loading : Boolean = false;
  tableFilters: ListUtil = new ListUtil();
  applicants = [];

  constructor(private router: Router, private applicantService: ApplicantService, private message: NzMessageService) {}

  ngOnInit(): void {
   this.list();
  } 
  
  list() {
    this.loading = true;
    this.applicantService.list(this.tableFilters)
      .subscribe(
        response => {
          this.applicants = response.data;
          this.tableFilters.total = response.data.length;
          this.loading = false;
        },
        error => {
          this.loading = false;
          this.message.create("error", error.message);
        });
  }

  create(id) {
    if(id > 0)
      this.router.navigateByUrl('/admin/applicant/edit/' + id);
    else
      this.router.navigateByUrl('/admin/applicant/create');
  }

  details(id) {
    this.router.navigateByUrl('/admin/applicant/details/' + id);
  }

  delete(id) {
    this.loading = true;
    this.applicantService.delete(id).subscribe(
      response => {
        this.loading = false;
        this.message.create("success", 'Applicant deleted succesfully.');
        this.list();
      },
      error => {
        this.loading = false;
        this.message.create("error", 'Applicant delete failed.' + error.message);
      });
  }


}
