import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../model/category';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private targetUrl: string = environment.restUrl + '/projects';
  private createTodoUrl: string = `${environment.restUrl}/todos`;

  constructor(
    private httpClient: HttpClient
  ) { }

  public createNewTodo(category: string, task: string): Observable<any> {
    const formData = new FormData();
    formData.append('category_title', category);
    formData.append('text', task);
    return this.httpClient.post<any>(this.createTodoUrl, formData); 
  }

  public getTodos(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.targetUrl);
  }

  public patch(categoryId, todoId, isCompleted): Observable<any> {
    const url = `${environment.restUrl}/projects/${categoryId}/todo/${todoId}`;
    const formData = new FormData();
    formData.append('isCompleted', isCompleted ? '1' : '0');
    return this.httpClient.patch(url, formData);
  }
}

