export { Project, projectInterface };

class Project {
  constructor(projectTitle) {
    this.projectTitle = projectTitle;
  }

  get titleOfProject() {
    return this.projectTitle;
  }

  set titleOfProject(value) {
    this.projectTitle = value;
  }
}

const projectInterface = {
  projects: [],

  add(project) {
    this.projects.push(project);
    return this.projects;
  },

  remove(project) {
    this.projects = this.projects.filter(
      (proj) => proj.titleOfProject !== project
    );
    return this.projects;
  },

  removeAssociatedTasks(projectName, storage) {
    const leftTasks = storage.filter(
      (task) => task.titleOfProject !== projectName
    );
    return leftTasks;
  },
};
