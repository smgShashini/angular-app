import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css'],
})
export class Demo2Component implements OnInit, OnDestroy {
  pName = 'Shashini Gunawardhana';
  dName = 'Dr. TKS Jayethilake';
  date = '2021/05/12';
  message: String = '';

  data = { patientName: this.pName, doctName: this.dName, date: this.date };
  subscription: Subscription = new Subscription();

  constructor(private transfer: TransferService) {}

  ngOnInit() {
    this.subscription = this.transfer.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  newMessage() {
    this.transfer.changeMessage(this.pName);
  }
}
