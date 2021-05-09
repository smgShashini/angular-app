import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecordsService {
  infor1: string[] = ['Name 1', 'age 1'];
  infor2: string[] = ['Name 2', 'age 2'];
  infor3: string[] = ['Name 3', 'age 3'];

  getinfor1(): string[] {
    return this.infor1;
  }

  getinfor2(): string[] {
    return this.infor2;
  }

  getinfor3(): string[] {
    return this.infor3;
  }

  constructor() {}
}
