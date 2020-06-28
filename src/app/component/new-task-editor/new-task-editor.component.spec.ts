import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskEditorComponent } from './new-task-editor.component';

describe('NewTaskEditorComponent', () => {
  let component: NewTaskEditorComponent;
  let fixture: ComponentFixture<NewTaskEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTaskEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTaskEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
