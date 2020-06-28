import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../model/todo';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

public console = console;

  @Input()
  private categoryId: number;
  private todoId: number;

  @Input()
  public todo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoId = this.todo.id;
  }

  public onUpdate(event) {
    this.patch(event.checked);
  }

  private patch(isCompleted: boolean) {
    this.todoService.patch(this.categoryId, this.todoId, isCompleted);
  }
}

