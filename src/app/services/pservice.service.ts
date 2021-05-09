import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PserviceService {
  constructor(private http: HttpClient) {}

  getAllPatientdata() {
    return this.http.get('data/patients.json');
  }
}
