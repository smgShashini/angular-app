import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css'],
})
export class SendComponent implements OnInit, OnDestroy {
  defaultmessage: string = '';
  sendName: string = '';

  subscription: any;
  dataArray: String[] = ['Nisala Gunawardhana', 'Younger Brother'];
  constructor(private tr: TransferService) {}

  ngOnInit(): void {
    this.subscription = this.tr.currentMessage.subscribe(
      (message) => (this.defaultmessage = message)
    );
    this.subscription = this.tr.currentName.subscribe(
      (name) => (this.sendName = name)
    );
    console.log(this.defaultmessage);
    console.log(this.sendName);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  sendDataToReciveComponent() {
    this.tr.changeMessage('Message from send component');
    console.log(this.defaultmessage);
    this.tr.changeDetails('Nisala Gunawardhana', 'Younger brother');
    console.log(this.sendName);
  }
}
