import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
 // @ to use a service, I need to add it as a provider into the constructor
import { Task } from '../../Task';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
  
export class TasksComponent implements OnInit {

  tasks: Task[] = []; // TASKS are a property of our component

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks
    })
  }

}



