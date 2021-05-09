import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  readonly APIUrl = 'https://localhost:5001/api';

  constructor(private http: HttpClient) {}

  //[Begin : CRUD operations for Doctor ]
  getDocList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/doctor');
  }

  addDoctor(val: any) {
    return this.http.post(this.APIUrl + '/doctor', val);
  }

  updateDoctor(val: any) {
    return this.http.put(this.APIUrl + '/doctor', val);
  }
  deleteDoctor(val: any) {
    return this.http.delete(this.APIUrl + '/doctor' + val);
  }

  //[End   : CRUD operations for Doctor ]

  //[Begin : CRUD operations for Patient ]
  getPatientList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/patient');
  }

  //[End   : CRUD operations for Patient ]
}
