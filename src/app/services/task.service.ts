import { Injectable } from '@angular/core';
import { Task } from '../Task';
import {Observable} from 'rxjs'
// service is just a class - Injectable declaration is being provided to the application level. 
import {HttpClient, HttpHeaders} from "@angular/common/http" // angulars built in for http requests (like fetch)

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

 @Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5002/tasks'

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    // const tasks = of(TASKS);
    // return tasks;
    return this.http.get<Task[]>(this.apiUrl)
  }
   
   deleteTask(task: Task): Observable<Task>{
     const url = `${this.apiUrl}/${task.id}`
     console.log(url)
     return this.http.delete<Task>(url) // returns an observable
   }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }
  
}