import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  get(url: string, baseurl: string = '') {
    return this.http.get(`${baseurl.length ? baseurl : environment.baseUrl}/${url}`, { headers: this.getCommonHeader()});
}

  post(url: string, body: any) {
    return this.http.post(`${environment.baseUrl}/${url}`, body, { headers: this.getCommonHeader() });
}

  put(url: string, body: any) {
    return this.http.put(`${environment.baseUrl}/${url}`, body, { headers: this.getCommonHeader() });
}

  delete(url: string, baseurl: string = '') {
  return this.http.delete(`${baseurl.length ? baseurl : environment.baseUrl}/${url}`, { headers: this.getCommonHeader()});
}

  public getCommonHeader() {
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
    };
    return headers;
  }
}