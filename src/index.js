import { Todo, taskInterface } from "./todosManipulations";
import { Project, projectInterface } from "./projectManagement";

import { createElement, appendElement, prependElement } from "./sectionWithDom";
import "./styles.css";

// Create the main layout
const content = document.querySelector("#content");
const inboxBlock = createElement("div", "inbox-div", "");
const projectBlock = createElement("div", "project-div", "");
const todoBlock = createElement("div", "todo-div", "");

appendElement(content, inboxBlock);
appendElement(content, projectBlock);
appendElement(content, todoBlock);

// Default block
const inbox = createElement("button", "button-inbox", "inbox");
inbox.disabled = true;
inbox.classList.add("project");
const today = createElement("button", "button-today", "today");
const upcoming = createElement("button", "button-upcoming", "upcoming");

appendElement(inboxBlock, inbox);
appendElement(inboxBlock, today);
appendElement(inboxBlock, upcoming);

// For now to allow task/project creation
const createTaskButton = createElement("button", "create-tasks", "Create task");
const createProjectButton = createElement(
  "button",
  "create-projects",
  "Create project"
);
const displayForTasks = createElement("div", "display-tasks", "");

appendElement(todoBlock, createTaskButton);
appendElement(todoBlock, createProjectButton);
appendElement(todoBlock, displayForTasks);

// Main array where tasks are stored
let mainStorage = [];
console.log("Main storage:");
console.log(mainStorage);
// Store projects
let projectStorage = [];
console.log("Project storage:");
console.log(projectStorage);

// Create a todo directly in a task
const createTaskInsideProject = createElement(
  "button",
  "create-task-directly",
  "+"
);
appendElement(todoBlock, createTaskInsideProject);
createTaskInsideProject.addEventListener("click", createTodo);

// Create a todo globally - project name is required!!!
createTaskButton.addEventListener("click", createTodo);
function createTodo(e) {
  // Create a task locally inside the chosen task
  const directCreation = e.target.closest(".create-task-directly");
  let project;

  if (directCreation) {
    const currentlyChosenProject =
      document.querySelector("button[disabled]").textContent;
    project = currentlyChosenProject;
  } else {
    project = prompt("Project?", "");
    // Default project, there are no custom projects yet
    if (projectStorage.length === 0) {
      alert(
        "You have not created any project yet. Your tasks are put into inbox"
      );
      project = "inbox";
    }
  }

  let title = prompt("Title", "");
  let priority = prompt("Priority", "");

  const task = new Todo(project, title, priority);
  mainStorage = taskInterface.add(task);
  console.log(mainStorage);

  updateTaskDisplay();
}

// Display all todos in a project
inbox.addEventListener("click", displayThisProjectTasks);
projectBlock.addEventListener("click", displayThisProjectTasks);

function displayThisProjectTasks(e) {
  // Click occurs on the inside of a button
  const btn = e.target.closest("button");
  if (!btn) return;

  let disabledButtons = document.querySelectorAll("button.project");
  disabledButtons.forEach((btn) => (btn.disabled = false));

  btn.disabled = true;

  const projectName = e.target.textContent;
  generateListOfTasks(projectName);
}

function updateTaskDisplay() {
  const projectName = document.querySelector("button[disabled]").textContent;

  generateListOfTasks(projectName);
}

function generateListOfTasks(project) {
  const currentProject = taskInterface.findAll(project);
  // Clear the todo block not to duplicate appended elements
  displayForTasks.replaceChildren();

  for (let i = 0; i < currentProject.length; i++) {
    const taskDiv = createElement("div", "task-div", "");
    taskDiv.setAttribute("data-id", currentProject[i].id);
    const removeButton = createElement("button", "remove-task", "X");
    const titlePara = currentProject[i].todoTitle;
    const projectPara = currentProject[i].todoProject;
    const priorityPara = currentProject[i].todoPriority;

    appendElement(displayForTasks, taskDiv);
    appendElement(taskDiv, removeButton);

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
      appendElement(taskDiv, para);
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
createProjectButton.addEventListener("click", createProject);
function createProject() {
  const title = prompt("Project name?", "");
  if (title === "" || !title) return;

  const project = new Project(title);
  projectStorage = projectInterface.add(project);

  const div = createElement("div", "project-title-div", "");
  const btn = createElement("button", "custom-project-div", title);
  btn.classList.add("project");
  const span = createElement("span", "remove-project", "X");

  appendElement(div, btn);
  appendElement(div, span);
  appendElement(projectBlock, div);
}

// Remove a project
projectBlock.addEventListener("click", removeProject);
function removeProject(e) {
  const span = e.target.closest("span");
  if (!span) return;

  const project = span.previousElementSibling.textContent;
  const warning = confirm("remove this project with all tasks related to it?");
  if (warning) {
    // Clear array in an object from which I take all info and assign to mainStorage
    taskInterface.todos = projectInterface.removeAssociatedTasks(
      project,
      taskInterface.todos
    );
    mainStorage = taskInterface.todos;

    projectStorage = projectInterface.remove(project);
    span.parentNode.remove();
    displayForTasks.replaceChildren();

    inbox.disabled = true;
    updateTaskDisplay();
  }
}
