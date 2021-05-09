import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.css'],
})
export class PatientCardComponent implements OnInit {
  constructor() {}
  @Input() patientArray: any;

  ngOnInit(): void {}
}
