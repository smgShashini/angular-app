import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css'],
})
export class PatientFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit(Form: NgForm) {
    console.log('Submit was clicked');
    console.log(Form);
  }
}
