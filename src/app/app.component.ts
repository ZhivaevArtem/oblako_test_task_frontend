import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InCreateModeService } from './service/in-create-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rails-frontend';

  public createNewTaskMode: boolean = false;

  constructor(
    public inCreateModeService: InCreateModeService
  ) {}

  ngOnInit() {
  }

  public exitCreateMode() {
    this.inCreateModeService.value = false;
  }

  public enterCreateMode() {
    this.inCreateModeService.value = true;
  }
}

