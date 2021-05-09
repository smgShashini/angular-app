import { Component, OnInit } from '@angular/core';
import { PserviceService } from 'src/app/services/pservice.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
})
export class PatientListComponent implements OnInit {
  patients: any;

  constructor(private p: PserviceService) {}

  ngOnInit(): void {
    this.p.getAllPatientdata().subscribe((data) => (this.patients = data));
    // this.http
    //   .get('data/patients.json')
    //   .subscribe((data) => (this.patients = data));
  }
}
