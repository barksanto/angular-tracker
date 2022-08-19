import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  // using !, try to initialize the array when you declare it next "makes: any[] = [];"
  text!: string;
  day!: string;
  reminder: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text) {
      alert("Please add a task");
      return
    }
    
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.text = "";
    this.day = "";
    this.reminder = false;

    // @ TODO **emit event**
  }


}
