export { Project };

// function createNewProject(div, array) {
//   const name = prompt("Project name?", "");
//   const btn = createElement("button", name, name);
//   appendElement(div, btn);
//   array.push(name);
// }

class Project {
  constructor(project) {
    this.project = project;
  }

  get projectTitle() {
    return this.project;
  }

  set projectTitle(value) {
    this.project = value;
  }
}
