import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TodoService } from '../../service/todo.service';
import { Category } from '../../model/category';
import { InCreateModeService } from '../../service/in-create-mode.service';

@Component({
  selector: 'app-new-task-editor',
  templateUrl: './new-task-editor.component.html',
  styleUrls: ['./new-task-editor.component.scss']
})
export class NewTaskEditorComponent implements OnInit {

  private categoryTitles: string[] = [];

  public filteredValues: string[];

  public categoryControl: FormControl;
  public todoControl: FormControl;

  constructor(
    private inCreateModeService: InCreateModeService,
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.categoryControl = new FormControl('', [Validators.required, Validators.minLength(1)]);
    this.todoControl = new FormControl('', [Validators.required, Validators.minLength(1)]);

    this.categoryControl.valueChanges.subscribe(newValue => {
      const filterValue = newValue.toLowerCase();
      this.filteredValues = this.categoryTitles.filter(title => title.toLowerCase().includes(filterValue));
    });

    this.todoService.getTodos().subscribe(categories => {
      for (let cat of categories) {
        this.categoryTitles.push(cat.title);
      }
      this.filteredValues = this.categoryTitles.slice();
    });
  }

  public submit() {
    if (this.categoryControl.status != "VALID" || this.todoControl.status != "VALID") {
      return;
    }
    const category = this.categoryControl.value;
    const task = this.todoControl.value;
    this.todoService.createNewTodo(category, task).subscribe(res => location.reload());
  }

  public exitCreatingMode() {
    this.inCreateModeService.value = false;
  }
}

