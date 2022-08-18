import { Component, OnInit } from '@angular/core';

@Component({ // declaration
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
  
  // class
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  
  constructor() { }

  ngOnInit(): void { // life cycle method- when initializing 
  }

  toggleAddTask() {
    console.log("toggle")
  }
}
