import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../model/project';
import {Todo} from '../../model/todo';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input()
  public project: Project;

  constructor() { }

  ngOnInit(): void {
  }

  public trackBy(index: number, todo: Todo): number {
    return todo.id;
  }

}
