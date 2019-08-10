import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormDetailService {

  loadUrl = 'assets/mockFormData/formDetailJson.json';

  constructor(private http: HttpClient) { }

  getMockFormData() {
    return this.http.get(this.loadUrl);
  }
}
