import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../model/todo';
import { HttpClient } from '@angular/common/http';
import { Category } from '../../model/category';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input()
  public category: Category;

  constructor() {}

  ngOnInit(): void {}
}

