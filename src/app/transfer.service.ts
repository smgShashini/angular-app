import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  // For message transfer
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  // For name transfer
  private nameSource = new BehaviorSubject('');
  currentName = this.nameSource.asObservable();

  // For relation transfer
  private relationSource = new BehaviorSubject('');
  currentRelation = this.relationSource.asObservable();

  constructor() {}

  changeDetails(name: string, bond: string) {
    this.nameSource.next(name);
    this.relationSource.next(bond);
  }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
