import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({ // declaration
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
  
  // class
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription!: Subscription;
  
  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
  }

  ngOnInit(): void { // life cycle method- when initializing 
  }

  toggleAddTask() {
    console.log("toggle")
    this.uiService.toggleAddTask()
  }
}
