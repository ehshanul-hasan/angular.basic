import { Component, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApplicantService } from 'src/services/applicant.service';

@Component({
  selector: 'app-applicant-details',
  templateUrl: './applicant-details.component.html',
  styleUrls: ['./applicant-details.component.css']
})
export class ApplicantDetailsComponent {

  loader: Boolean = false;
  id : string = '';
  applicant : any;

  cancel(){
    this.router.navigateByUrl('/admin/applicant'); 
  }

  constructor(private router: Router, 
    private applicantService: ApplicantService, 
    private message: NzMessageService,
    private route: ActivatedRoute) {
      let id = this.route.snapshot.paramMap.get('id');
      if(id)
        this.id = id;
  }

  get(id){
    this.applicantService.get(this.id).subscribe(
      response => {
        this.applicant = response.data;
      },
      error => {
        this.message.create("success", 'Error occured while fetching data');
      });
  }

  ngOnInit(): void {
    if(this.id)
    this.get(this.id)
  }
}
