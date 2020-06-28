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

  constructor(
    private httpClient: HttpClient
  ) { }

  public getTodos(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.targetUrl);
  }

  public patch(categoryId, todoId, isCompleted) {
    const url = `${environment.restUrl}/projects/${categoryId}/todo/${todoId}`;
    const formData = new FormData();
    formData.append('isCompleted', isCompleted ? '1' : '0');
    this.httpClient.patch(url, formData).subscribe();
  }
}

