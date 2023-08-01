import { Todo, taskInterface } from "./todosManipulations";
import { Project, projectInterface } from "./projectManagement";
// Import methods
import * as DOMMethods from "./sectionWithDom";
// Import variables
import {
  displayForTasks,
  createTodoForm,
  projectBlock,
  okButton,
} from "./sectionWithDom";

import "./main.css";
import "./inbox-block.css";
import "./project-block.css";
import "./todo-block.css";
import "./popup-menu.css";

// Section containing program logic
let mainStorage = [];
console.log("Main storage:");
console.log(mainStorage);
let projectStorage = [];
console.log("Project storage:");
console.log(projectStorage);

// Cancel/add todo (event delegation)
DOMMethods.createEventListener(createTodoForm, "click", controlPopupView);
DOMMethods.createEventListener(createTodoForm, "keydown", controlPopupView);
function getTitleInput() {
  const title = document.querySelector("#for-title").value;
  return title;
}

function getDescriptionInput() {
  const description = document.querySelector("#for-description").value;
  return description;
}

function getDueDateInput() {
  const dueDate = document.querySelector("#for-due-date").value;
  return dueDate;
}

function getPriorityInput() {
  const priority = document.querySelector("#for-priority").value;
  return priority;
}

function getProjectInput() {
  const project = document.querySelector("#for-project").value;
  return project;
}

function checkInputGeneralRules(inputField) {
  if (inputField.includes(" ")) {
    alert("Input cannot contain blank spaces");
    return true;
  }

  if (inputField.length > 15) {
    alert("Too long project name (limit is 15 characters");
    return true;
  }

  if (inputField.length !== 0 && inputField.length < 2) {
    alert("Too short project name (minimum is 2 characters)");
    return true;
  }

  if (inputField === "") {
    alert("Empty input is not allowed");
    return true;
  }
}

function checkDateInput(inputField) {
  if (inputField === "") {
    alert("Please choose a due date");
    return true;
  }
}

function checkInputRulesForNewProject(inputName) {
  if (checkInputGeneralRules(inputName)) return true;

  const projectName = inputName.toLowerCase();
  if (projectName === "inbox") {
    alert("Cannot duplicate the name of a default project");
    return true;
  }

  for (let i = 0; i < projectStorage.length; i++) {
    if (projectStorage[i].titleOfProject.toLowerCase() === projectName) {
      alert("Cannot duplicate project names");
      return true;
    }
  }
}

function createTodo() {
  let title = getTitleInput();
  let description = getDescriptionInput();
  let dueDate = getDueDateInput();
  let priority = getPriorityInput();
  let project = getProjectInput();

  const task = new Todo(project, title, description, dueDate, priority);
  mainStorage = taskInterface.add(task);
  console.log(mainStorage);
  // // Dynamically render newly created tasks
  if (project === "inbox") {
    DOMMethods.highlightProject();
  }
  DOMMethods.updateTodoDisplay();
}

function controlPopupView(e) {
  const btn = e.target.textContent;
  if (btn === "Cancel" || e.key === "Escape") {
    DOMMethods.closePopup();
  } else if (btn === "Add" || e.key === "Enter") {
    // For now imitate similar behavior to a required attribute
    if (checkInputGeneralRules(getTitleInput())) return;
    if (checkDateInput(getDueDateInput())) return;

    createTodo(e);
    DOMMethods.closePopup();
  }
}

// Remove a task
DOMMethods.createEventListener(displayForTasks, "click", removeTask);
function removeTask(e) {
  const btn = DOMMethods.findClick(e, "button");
  if (!btn) return;
  // Not allow removing tasks in today/upcoming categories
  // const disableManipulation = limitTasksOnDateCategories();
  // if (disableManipulation) return;
  const task = DOMMethods.findClosestDataAttibute(e);
  const id = DOMMethods.getIdOfSpecificTask(task);

  task.remove();
  mainStorage = taskInterface.remove(id);
  console.log(mainStorage);
}

// Complete a task
DOMMethods.createEventListener(displayForTasks, "change", completeTask);
function slowDownTaskCompleting(taskPara, idPara) {
  setTimeout(() => {
    taskPara.remove();
    mainStorage = taskInterface.remove(idPara);
    console.log(mainStorage);
  }, 300);
}

function completeTask(e) {
  // Not allow completing tasks in today/upcoming categories
  // const disableManipulation = limitTasksOnDateCategories();
  // if (disableManipulation) return;
  const taskStatus = DOMMethods.checkTaskStatus(e);
  if (taskStatus) {
    DOMMethods.applyStrikeThroughEffect(e);
    DOMMethods.preventUncheckingTask(e);

    const task = DOMMethods.findClosestDataAttibute(e);
    const id = DOMMethods.getIdOfSpecificTask(task);
    slowDownTaskCompleting(task, id);
  }
}

// Create a project
DOMMethods.createEventListener(okButton, "click", createProject);
function getNewProjectTitle() {
  const title = document.querySelector("#for-new-project").value;
  return title;
}

function createProject() {
  const title = getNewProjectTitle();
  const isNotAllowed = checkInputRulesForNewProject(title);
  if (isNotAllowed) return;

  const project = new Project(title);
  projectStorage = projectInterface.add(project);
  DOMMethods.toggleNewProjectInputBlock();
  DOMMethods.displayNewProject(title);
  DOMMethods.highlightProject(title);
  DOMMethods.updateTodoDisplay();
  console.log(projectStorage);
}

// Remove a project
DOMMethods.createEventListener(projectBlock, "click", removeProject);
function confirmChoice() {
  const warning = confirm("remove this project with all tasks related to it?");
  return warning;
}
// Clear array in an object from which I take all info and assign to mainStorage
function changeArraysInMethodObjects(proj) {
  taskInterface.todos = projectInterface.removeAssociatedTasks(
    proj,
    taskInterface.todos
  );
  mainStorage = taskInterface.todos;
}

function removeProject(e) {
  const span = DOMMethods.findClick(e, "span");
  if (!span) return;

  const project = DOMMethods.getSiblingElementText(span);
  const answer = confirmChoice();
  if (answer) {
    changeArraysInMethodObjects(project);
    projectStorage = projectInterface.remove(project);
    DOMMethods.removeProjectBtn(span);
    // While removing an element from DOM and needing to rerender content, it will automatically go back to inbox project
    DOMMethods.highlightProject();
    DOMMethods.updateTodoDisplay();
    console.log(projectStorage);
    console.log(mainStorage);
  }
}
