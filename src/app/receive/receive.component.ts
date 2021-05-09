import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-receive',
  templateUrl: './receive.component.html',
  styleUrls: ['./receive.component.css'],
})
export class ReceiveComponent implements OnInit, OnDestroy {
  subscription: any;
  receivedName: string = '';
  receivedBond: string = '';
  rmessage: string = '';
  rname: string = '';
  rbond: string = '';

  constructor(private tr: TransferService) {}

  ngOnInit() {
    this.subscription = this.tr.currentMessage.subscribe(
      (message) => (this.rmessage = message)
    );
    this.subscription = this.tr.currentName.subscribe(
      (name) => (this.rname = name)
    );
    this.subscription = this.tr.currentRelation.subscribe(
      (bond) => (this.rbond = bond)
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
