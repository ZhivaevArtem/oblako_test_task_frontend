import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../../model/todo';
import {TodoService} from '../../service/todo.service';

@Component({
  selector: 'app-todo-row',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input()
  public todo: Todo;

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
  }

  public checkboxUpdate(isCompleted: boolean): void {
    this.todoService.patchTodo(this.todo.project_id, this.todo.id, isCompleted)
      .subscribe(response => this.todo.is_completed = response.is_completed);
  }
}
