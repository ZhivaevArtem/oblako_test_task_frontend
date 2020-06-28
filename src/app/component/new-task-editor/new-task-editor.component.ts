import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { TodoService } from '../../service/todo.service';
import { Category } from '../../model/category';

@Component({
  selector: 'app-new-task-editor',
  templateUrl: './new-task-editor.component.html',
  styleUrls: ['./new-task-editor.component.scss']
})
export class NewTaskEditorComponent implements OnInit {

  private categoryTitles: string[] = [];

  public categories: Category[] = [];
  public filteredValues: string[];

  public categoryControl: FormControl;
  public todoControl: FormControl;

  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.categoryControl = new FormControl();
    this.todoControl = new FormControl();

    this.categoryControl.valueChanges.subscribe(newValue => {
      const filterValue = newValue.toLowerCase();
      this.filteredValues = this.categoryTitles.filter(title => title.toLowerCase().includes(filterValue));
    });

    this.todoService.getTodos().subscribe(v => {
      for (let cat of v) {
        this.categoryTitles.push(cat.title);
      }
      this.filteredValues = this.categoryTitles.slice();
      this.categories = v;
    });
  }

  public submit() {
    const category = this.categoryControl.value;
    const task = this.todoControl.value;
    this.todoService.createNewTodo(category, task).subscribe();
  }
}

