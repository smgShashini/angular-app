import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-app2';
  isDisplay = true;
  activeAddForm = true;
  displayTable() {
    this.isDisplay = !this.isDisplay;
  }
  displayAddForm() {
    this.activeAddForm = !this.activeAddForm;
  }
}
