import {Component, OnInit} from '@angular/core';
import {Project} from './model/project';
import {TodoService} from './service/todo.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {plainToClass} from 'class-transformer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public editMode: boolean = false;
  public projects: Project[] = [];

  public options: Project[] = [];

  public newTodoEditorGroup: FormGroup;

  constructor(
    private todoService: TodoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.todoService.getProjects()
      .subscribe(projects => this.projects = projects.map(proj => plainToClass(Project, proj)));
    this.newTodoEditorGroup = this.formBuilder.group({
      todo: this.formBuilder.control('',
        [Validators.required, Validators.minLength(1), Validators.maxLength(140)]),
      project: this.formBuilder.control('',
        [Validators.required, Validators.minLength(1), Validators.maxLength(40)])
    });
    this.newTodoEditorGroup.get('project').valueChanges.subscribe(newValue => {
      this.filterOptions(newValue);
    });
  }

  public enterNewTodoEditor(): void {
    this.newTodoEditorGroup.reset();
    this.editMode = true;
  }

  public leaveNewTodoEditor(): void {
    this.editMode = false;
  }

  public submit(): void {
    if (!this.newTodoEditorGroup.valid) {
      return;
    }
    const todoText = this.newTodoEditorGroup.get('todo').value;
    const projectTitle = this.newTodoEditorGroup.get('project').value;
    this.todoService.createTodo(projectTitle, todoText).subscribe(newTodo => {
      this.leaveNewTodoEditor();
      const project = this.projects.filter(proj => proj.id === newTodo.project_id)[0];
      if (project) {
        project.addTodo(newTodo);
      } else {
        this.projects.push(new Project(newTodo.project_id, projectTitle, [newTodo]));
      }
    });
  }

  public trackBy(index: number, project: Project): number {
    return project.id;
  }

  private filterOptions(substr: string): void {
    const s = substr ? substr.toLowerCase() : '';
    this.options = this.projects.filter(project => project.title.toLowerCase().includes(s));
  }
}

