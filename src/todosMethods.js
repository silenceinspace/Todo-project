export { Todo };
import { Project } from "./createProject";

class Todo extends Project {
  // Creates a todo
  constructor(project, title, description, dueDate) {
    // Base class is Project that has a project property on its constructor
    super(project);
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }

  // Updates a todo
  get todoTitle() {
    return this.title;
  }

  set todoTitle(value) {
    this.title = value;
  }

  get todoDescription() {
    return this.description;
  }

  set todoDescription(value) {
    this.description = value;
  }

  get todoDueDate() {
    return this.dueDate;
  }

  set todoDueDate(value) {
    this.dueDate = value;
  }

  get todoProject() {
    return this.project;
  }

  set todoProject(value) {
    this.project = value;
  }
}
