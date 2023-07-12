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

  add(elem) {
    this.projects.push(elem);
    return this.projects;
  },

  remove(elem) {
    const specificProject = elem.titleOfProject;

    this.projects = this.projects.filter(
      (proj) => proj.titleOfProject !== specificProject
    );
    console.log(`Remove project: "${specificProject}" title`);

    return this.projects;
  },

  removeAssociatedTasks(proj, storage) {
    const relatedTasks = proj.titleOfProject;
    storage = storage.filter((task) => task.todoProject !== relatedTasks);

    console.log(`All tasks related to "${relatedTasks}" project were removed`);

    return storage;
  },
};
