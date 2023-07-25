import { Todo, taskInterface } from "./todosManipulations";
import { Project, projectInterface } from "./projectManagement";
// Import methods
import * as DOMMethods from "./sectionWithDom";
// Import variables
import {
  projectBlock,
  inboxBlock,
  createTaskButton,
  createProjectButton,
  displayForTasks,
  createTaskInsideProject,
} from "./sectionWithDom";

import "./main.css";
import "./inbox-block.css";
import "./project-block.css";
import "./todo-block.css";

// Section containing program logic
let mainStorage = [];
console.log("Main storage:");
console.log(mainStorage);
let projectStorage = [];
console.log("Project storage:");
console.log(projectStorage);

// 1) Create a todo directly in a task
// 2) Create a todo globally - project name is required
DOMMethods.createEventListener(createTaskInsideProject, "click", createTodo);
DOMMethods.createEventListener(createTaskButton, "click", createTodo);

// Get input from a user
function getInputForTaskProject() {
  let project;
  const customProjectExists = checkForCustomProjects();
  if (customProjectExists) {
    project = "inbox";
  } else {
    project = prompt("Project?", "");
  }
  return project;
}

// Assign all tasks to a default project if true
function checkForCustomProjects() {
  if (projectStorage.length === 0) {
    alert(
      "You have not created any project yet. Your tasks are put into inbox"
    );
    return true;
  }
}

function getInputForTaskTitle() {
  const title = prompt("Title", "");
  return title;
}

function getInputForTaskDueDate() {
  // Fow now hardcore data objects to compare dates. But eventually get 3 numbers from date input and put them into new Date(num1, num2, num3)
  let dueDate = prompt("Due date?", "");
  if (dueDate === "1") {
    dueDate = new Date();
  } else if (dueDate === "2") {
    dueDate = new Date(2018, 11, 24);
  } else if (dueDate === "3") {
    dueDate = new Date(2028, 11, 24);
  } else if (dueDate === "4") {
    dueDate = new Date(2023, 7, 2);
  } else if (dueDate === "5") {
    dueDate = new Date(2023, 6, 28);
  }
  return dueDate;
}

function getInputForTaskPriority() {
  const priority = prompt("Priority", "");
  return priority;
}

function limitTasksOnDateCategories() {
  const currentCategory = DOMMethods.findChosenProject();
  if (currentCategory === "today" || currentCategory === "upcoming") {
    alert("You can't manipulate with tasks inside the category");
    return true;
  }
}

function createTodo(e) {
  let project;
  const createdDirectlyOnProject = DOMMethods.findClick(
    e,
    ".create-task-directly"
  );
  const disableManipulation = limitTasksOnDateCategories();

  if (createdDirectlyOnProject) {
    // Not allowing to create tasks in these categories
    if (disableManipulation) return;
    project = DOMMethods.findChosenProject();
  } else {
    project = getInputForTaskProject();
  }

  let title = getInputForTaskTitle();
  let dueDate = getInputForTaskDueDate();
  let priority = getInputForTaskPriority();
  const task = new Todo(project, title, dueDate, priority);
  mainStorage = taskInterface.add(task);
  console.log(mainStorage);
  // Dynamically render newly created tasks
  DOMMethods.updateTodoDisplay();
}

// Display all todos in a project/date category
DOMMethods.createEventListener(
  projectBlock,
  "click",
  DOMMethods.displayTasksInThisProject
);

DOMMethods.createEventListener(
  inboxBlock,
  "click",
  DOMMethods.displayTasksInThisProject
);

// Remove a task
DOMMethods.createEventListener(displayForTasks, "click", removeTask);
function removeTask(e) {
  const btn = DOMMethods.findClick(e, "button");
  if (!btn) return;

  // Not allow removing tasks in today/upcoming categories
  const disableManipulation = limitTasksOnDateCategories();
  if (disableManipulation) return;

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
  if (limitTasksOnDateCategories()) return;

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
DOMMethods.createEventListener(createProjectButton, "click", createProject);
function getInputForNewProject() {
  const title = prompt("Project name?", "");
  return title;
}

function createProject() {
  const title = getInputForNewProject();
  const project = new Project(title);
  projectStorage = projectInterface.add(project);
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
    DOMMethods.removePreviousTasksFromDOM();
    DOMMethods.highlightProject();
    DOMMethods.updateTodoDisplay();
    console.log(projectStorage);
    console.log(mainStorage);
  }
}
