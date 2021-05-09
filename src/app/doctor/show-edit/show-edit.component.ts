import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-edit',
  templateUrl: './show-edit.component.html',
  styleUrls: ['./show-edit.component.css'],
})
export class ShowEditComponent implements OnInit {
  constructor(private service: SharedService) {}
  DoctorList: any = [];

  ngOnInit(): void {
    this.refreshDocList();
  }
  refreshDocList() {
    this.service.getDocList().subscribe((data) => {
      console.log(data);
      this.DoctorList = data;
    });
  }
}
