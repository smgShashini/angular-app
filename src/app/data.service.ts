import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private detailSource = new BehaviorSubject(null);
  currentDetails = this.detailSource.asObservable();
  subscription: any;

  constructor() {}

  changeDetails(dataSet: any) {
    this.detailSource.next(dataSet);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
