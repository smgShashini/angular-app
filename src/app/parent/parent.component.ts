import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

// Sending details
export interface DialogData {
  name: string;
  bond: string;
}
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit, OnDestroy {
  d1: any;
  subscription: any;
  dint = { name: 'name', bond: 'bond' }; //Data want to send

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.subscription = this.data.currentDetails.subscribe(
      (message) => (this.d1 = message)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  //This happens when the button clicked
  sentDetail() {
    this.data.changeDetails(this.dint);
    console.log(this.dint);
  }
}
