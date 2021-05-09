import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css'],
  providers: [RecordsService],
})
export class EmpInfoComponent implements OnInit {
  receivedInfor1: string[] = [];
  receivedInfor2: string[] = [];
  receivedInfor3: string[] = [];

  getInforFromClassServive1() {
    this.receivedInfor1 = this.rservice.getinfor1();
  }

  getInforFromClassServive2() {
    this.receivedInfor2 = this.rservice.getinfor2();
  }

  getInforFromClassServive3() {
    this.receivedInfor3 = this.rservice.getinfor3();
  }

  constructor(private rservice: RecordsService) {}

  ngOnInit(): void {}
}
