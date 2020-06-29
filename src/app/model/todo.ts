export class Todo {
  public id: number;
  public text: string;
  public is_completed: boolean;
  public project_id: number;

  constructor(id: number, text: string, projectId: number, isCompleted: boolean = false) {
    this.id = id;
    this.text = text;
    this.is_completed = isCompleted;
    this.project_id = projectId;
  }
}
