import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../model/todo';
import {environment} from '../../environments/environment';
import {Project} from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public patchTodo(projectId: number, todoId: number, isCompleted: boolean): Observable<Todo> {
    return this.httpClient.patch<Todo>(`${environment.restUrl}/projects/${projectId}/todos/${todoId}`,
      {is_completed: isCompleted});
  }

  public getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(`${environment.restUrl}/projects`);
  }

  public createTodo(projectTitle: string, todoText: string): Observable<Todo> {
    return this.httpClient.post<Todo>(`${environment.restUrl}/todo`,
      {todo: todoText, project: projectTitle});
  }
}
