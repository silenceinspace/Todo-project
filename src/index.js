import { Todo } from "./todosMethods";
import { Project } from "./createProject";
import "./styles.css";
import { createElement } from "./createElements";
import { appendElement, prependElement } from "./createElements";
// import { createNewProject } from "./createProject";

// main array where tasks are stored
const content = document.querySelector("#content");
const mainStorage = [];

// Create new todos
const createTodoDiv = createElement("div", "create-todo", "CREATE TODO");
prependElement(content, createTodoDiv);

createTodoDiv.addEventListener("click", createTodo);

function createTodo() {
  for (let i = 0; i < 5; i++) {
    let nameProject;
    let title;

    if (i < 3) {
      nameProject = "inbox";
      title = `Inbox task number ${i}`;
    } else {
      nameProject = "car";
      title = `Car task number ${i}`;
    }

    const task = new Todo(
      nameProject,
      title,
      "leave a message for this world",
      "today"
    );

    console.log(task);
    mainStorage.push(task);
    console.log(mainStorage);
  }
}

const projectDiv = document.querySelector(".projects");
let currentProject;
projectDiv.addEventListener("click", (e) => {
  currentProject = e.target.className;
  console.log(currentProject);

  const tasksInThisProject = mainStorage.filter(showTasksInInbox);
  console.log(tasksInThisProject);
});
// filter tasks
function showTasksInInbox(task) {
  return task.project.toLowerCase() === currentProject.toLowerCase();
}

// Create new projects
/*
function addNewProject() {
  createNewProject(projectDiv, projects);
}
const projects = [];
const createProjectDiv = createElement(
  "div",
  "create-project",
  "CREATE PROJECT"
);
prependElement(content, createProjectDiv);
createProjectDiv.addEventListener("click", addNewProject);

*/

// Show all tasks for a particular project
// Event delegation on projectDiv
/*

let currentProject;
projectDiv.addEventListener("click", (e) => {
  currentProject = e.target.className;
  console.log(currentProject);

  const tasksInThisProject = mainStorage.filter(showTasksInInbox);
  console.log(tasksInThisProject);
});

*/
