import { Component, OnDestroy, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit, OnDestroy {
  demoName: String = 'demo';
  option: String = '';
  redBlockDisplay = false;
  blueBlockDisplay = false;
  message: String = '';

  subscription: Subscription = new Subscription();
  receivedData: any;

  constructor(private transfer: TransferService) {}

  ngOnInit() {
    this.subscription = this.transfer.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  selectChangeHandler(event: any) {
    this.option = event.target.value;
    this.redBlockDisplay = false;
    this.blueBlockDisplay = false;
  }
  displayRelavantblock() {
    if (this.option === 'red') {
      console.log('red was selected');
      this.redBlockDisplay = true;
    } else if (this.option === 'blue') {
      console.log('blue was selected');
      this.blueBlockDisplay = true;
    }
  }
}
