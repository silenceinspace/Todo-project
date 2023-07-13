import { Todo, taskInterface } from "./todosManipulations";
import { Project, projectInterface } from "./projectManagement";

import { createElement, appendElement, prependElement } from "./sectionWithDom";
import "./styles.css";

// Create the main layout
const content = document.querySelector("#content");
const defaultBlock = createElement("div", "default-div", "");
const projectBlock = createElement("div", "project-div", "");
const todoBlock = createElement("div", "todo-div", "");

appendElement(content, defaultBlock);
appendElement(content, projectBlock);
appendElement(content, todoBlock);

// Default block
const inboxBtn = createElement("button", "btn-default", "inbox");
const today = createElement("button", "btn-today", "today");
const upcoming = createElement("button", "btn-upcoming", "upcoming");

appendElement(defaultBlock, inboxBtn);
appendElement(defaultBlock, today);
appendElement(defaultBlock, upcoming);

// For now to allow task/project creation
const createTasksBtn = createElement("button", "create-tasks", "Create task");
const createProjectsBtn = createElement(
  "button",
  "create-projects",
  "Create project"
);
const displayForTasks = createElement("div", "display-tasks", "");

appendElement(todoBlock, createTasksBtn);
appendElement(todoBlock, createProjectsBtn);
appendElement(todoBlock, displayForTasks);

// Main array where tasks are stored
let mainStorage = [];
console.log("Main storage:");
console.log(mainStorage);

// Create a todo
createTasksBtn.addEventListener("click", createTodo);
function createTodo() {
  let project = prompt("Project?", "");
  // Default project - if projectStorage.length == 0 ---> means that no custom projects yet
  if (project === "") {
    project = "inbox";
  }
  let title = prompt("Title", "");
  let priority = prompt("Priority", "");

  const task = new Todo(project, title, priority);
  mainStorage = taskInterface.add(task);
  console.log(mainStorage);
}

// Display all todos in a project
defaultBlock.addEventListener("click", displayTasksInProject);
projectBlock.addEventListener("click", displayTasksInProject);

function displayTasksInProject(e) {
  // Click occurs on the inside of a button
  const btn = e.target.closest("button");
  if (!btn) return;

  const projectName = e.target.textContent;
  console.log(projectName);

  const currentProject = taskInterface.findAll(projectName);

  // Clear the todo block not to duplicate appended elements
  displayForTasks.replaceChildren();

  for (let i = 0; i < currentProject.length; i++) {
    const taskField = createElement("div", "task-field", "");
    taskField.setAttribute("data-id", currentProject[i].id);
    const removeTask = createElement("button", "rmv-task", "X");
    const titlePara = currentProject[i].todoTitle;
    const projectPara = currentProject[i].todoProject;
    const priorityPara = currentProject[i].todoPriority;

    appendElement(displayForTasks, taskField);
    appendElement(taskField, removeTask);

    for (let j = 0; j < 3; j++) {
      let para;
      switch (j) {
        case 0:
          para = createElement("p", "task-title", `Title: ${titlePara}`);
          break;
        case 1:
          para = createElement("p", "task-project", `Project: ${projectPara}`);
          break;
        case 2:
          para = createElement(
            "p",
            "task-priority",
            `Priority: ${priorityPara}`
          );
      }
      appendElement(taskField, para);
    }
  }
}

// Remove a task
displayForTasks.addEventListener("click", removeTask);

function removeTask(e) {
  const btn = e.target.closest("button");
  if (!btn) return;

  const specificTask = e.target.closest("[data-id]");
  const id = specificTask.getAttribute("data-id");

  specificTask.remove();
  mainStorage = taskInterface.remove(id);
  console.log(mainStorage);
}

// Create a project
// Store projects
let projectStorage = [];
console.log("Project storage:");
console.log(projectStorage);

createProjectsBtn.addEventListener("click", createProject);
function createProject() {
  const title = prompt("Project name?", "");
  if (title === "" || !title) return;

  const project = new Project(title);
  projectStorage = projectInterface.add(project);

  const btn = createElement("button", "custom-project-div", title);
  // const span = createElement("span", "rmv-project", "X");
  // appendElement(btn, span);

  appendElement(projectBlock, btn);
}

// Remove a project

// projectBlock.addEventListener("dblclick", removeroject);

function removeProject(e) {
  const btn = e.target.closest("button");
  if (!btn) return;

  const project = e.target.textContent;
  const warning = confirm("remove this project with all tasks related to it?");
  if (warning) {
    // Clear array in an object from which I take all info and assign to mainStorage
    taskInterface.todos = projectInterface.removeAssociatedTasks(
      project,
      taskInterface.todos
    );
    mainStorage = taskInterface.todos;

    projectStorage = projectInterface.remove(project);
    btn.remove();
    displayForTasks.replaceChildren();
  }
}
