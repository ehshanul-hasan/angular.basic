import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';
import { map } from 'rxjs/operators';
import { ListUtil } from 'src/model/common/list-utility.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {
  
  constructor(private httpService: HttpService) {}

  public list(params : ListUtil) {
    return this.httpService.get('applicant?PageIndex=' + params.page_index + '&PageSize=' + params.page_size + '&searchKey=' + params.search_key).pipe(
        map((res: any) => {
        return res;
      })
    );
  }

  public create(body) {
    return this.httpService.post('applicant', body).pipe(
        map((res: any) => {
        return res;
      })
    );
  }

  public save(action,body) {
    if(action == "create") {
        return this.httpService.post('applicant', body).pipe(
          map((res: any) => {
          return res;
        })
      );
    } else{
        return this.httpService.put('applicant/'+ body.id, body).pipe(
          map((res: any) => {
          return res;
        })
      );
    }
    
  }

  public get(id) {
    return this.httpService.get('applicant/' + id).pipe(
        map((res: any) => {
        return res;
      })
    );
  }

  public delete(id) {
    return this.httpService.delete('applicant/' + id).pipe(
        map((res: any) => {
        return res;
      })
    );
  }
}
