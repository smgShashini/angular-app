import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sibiling',
  templateUrl: './sibiling.component.html',
  styleUrls: ['./sibiling.component.css'],
})
export class SibilingComponent implements OnInit, OnDestroy {
  subscription: any;
  received: any;

  constructor(private data: DataService) {}
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.data.currentDetails.subscribe(
      (message) => (this.received = message)
    );
  }
}
