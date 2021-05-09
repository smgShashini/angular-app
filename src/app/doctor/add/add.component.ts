import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  constructor() {}
  activeAddSuccessDialog = true;

  ngOnInit(): void {}
  displayAddSuccessDialogBox() {
    this.activeAddSuccessDialog = !this.activeAddSuccessDialog;
  }
}
