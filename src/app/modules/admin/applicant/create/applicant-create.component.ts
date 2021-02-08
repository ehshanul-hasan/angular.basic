import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApplicantService } from 'src/services/applicant.service';

@Component({
  selector: 'app-applicant-create',
  templateUrl: './applicant-create.component.html',
  styleUrls: ['./applicant-create.component.css']
})
export class ApplicantCreateComponent {

  applicantForm!: FormGroup;
  loader: Boolean = false;
  id : string = '';
  applicant : any;

  submit(): void {
    this.loader = true;
    for (const i in this.applicantForm.controls) {
      this.applicantForm.controls[i].markAsDirty();
      this.applicantForm.controls[i].updateValueAndValidity();
    }

    if(!this.applicantForm.valid) {
      this.loader = false;
      return;
    }
    this.applicantService.save(this.id ? 'update' : 'create', this.applicantForm.value)
      .subscribe(
        response => {
         this.loader = false;
         this.message.create("success", 'Applicant is ' + (this.id.length > 0 ? "updated" : "created") + ' succesfully.');
         this.router.navigateByUrl('/admin/applicant');
        },
        error => {
          this.loader = false;
          this.message.create("error", 'Applicant is ' + (this.id.length > 0 ? "update" : "creation") + ' failed.');
        });
  }

  cancel(){
    this.router.navigateByUrl('/admin/applicant'); 
  }

  constructor(private fb: FormBuilder, 
    private router: Router, 
    private applicantService: ApplicantService,
    private message: NzMessageService,
    private route: ActivatedRoute) {
      let id = this.route.snapshot.paramMap.get('id');
      if(id)
        this.id = id;
      this.buildformData();
  }

  get(id){
    this.loader = true;
    this.applicantService.get(this.id).subscribe(
      response => {
        this.applicant = response.data;
        this.setformValue();
        this.loader = false;
      },
      error => {
        this.loader = false;
        this.message.create("error", 'Error occured while fetching data');
      });
  }

  setformValue() : void {
    this.applicantForm.setValue({
      name: this.applicant?.name, 
      familyName: this.applicant?.familyName,
      address: this.applicant?.address,
      countryOfOrigin: this.applicant?.countryOfOrigin,
      emailAddress: this.applicant?.emailAddress,
      age: this.applicant?.age,
      hired: this.applicant?.hired,
      id: this.id.length > 0 ? this.id : 0
    });
  }

  buildformData() : void {
    this.applicantForm = this.fb.group({
      name: [this.applicant?.name, [Validators.required]],
      familyName: [ this.applicant?.familyName, [Validators.required]],
      address: [ this.applicant?.address, [Validators.required]],
      countryOfOrigin: [this.applicant?.countryOfOrigin, [Validators.required]],
      emailAddress: [this.applicant?.dob, [Validators.required,  Validators.email]],
      age: [this.applicant?.age, [Validators.required, Validators.pattern("^[0-9]*$")]],
      hired: [false, [Validators.required]],
      id: [this.id.length > 0 ? this.id : 0]
    });
  }

  ngOnInit(): void {
    if(this.id)
    this.get(this.id)
  }

}
