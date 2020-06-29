import {Todo} from './todo';

export class Project {
  public id: number;
  public title: string;
  public todos: Todo[];

  constructor(id: number, title: string, todos: Todo[] = []) {
    this.id = id;
    this.title = title;
    this.todos = todos;
  }

  public addTodo(newTodo: Todo): void {
    this.todos.push(newTodo);
  }
}
