import { Injectable } from '@angular/core';
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';
import {Observable, of} from 'rxjs'
// service is just a class - Injectable declaration is being provided to the application level. 
import {HttpClient, HttpHeaders} from "@angular/common/http" // angulars built in for http requests (like fetch)


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

  
}