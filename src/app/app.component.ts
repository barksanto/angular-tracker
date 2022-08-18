import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // where it goes
  templateUrl: './app.component.html', // what it uses
  styleUrls: ['./app.component.css']  // what it uses
})
export class AppComponent {
  title:string = 'Task Tracker';
}
