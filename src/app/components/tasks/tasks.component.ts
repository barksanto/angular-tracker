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

  deleteTask(task: Task) {
    // think of .subsribe as .then
     this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter(t => t.id !== task.id)))
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    console.log(task)
     this.taskService.addTask(task).subscribe((task) => this.tasks.push(task))

  }

}



