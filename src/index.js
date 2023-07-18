import { Todo, taskInterface } from "./todosManipulations";
import { Project, projectInterface } from "./projectManagement";
// Import methods
import {
  displayNewProject,
  findClick,
  findChosenProject,
  createEventListener,
  grabTitleOfActiveProject,
  removePreviousTasksFromDOM,
  createBlocksToRepresentTasks,
  highlightProject,
  findClosestDataAttibute,
  getIdOfSpecificTask,
} from "./sectionWithDom";
// Import variables
import {
  projectBlock,
  inbox,
  createTaskButton,
  createProjectButton,
  displayForTasks,
  createTaskInsideProject,
} from "./sectionWithDom";
// Similar sections with styles are grouped different files
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

// Get input from a user
function getInputForTaskProject() {
  let project;
  if (checkForCustomProjects()) {
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
  const dueDate = prompt("Due date?", "");
  return dueDate;
}

function getInputForTaskPriority() {
  const priority = prompt("Priority", "");
  return priority;
}

// 1) Create a todo directly in a task
// 2) Create a todo globally - project name is required
createEventListener(createTaskInsideProject, "click", createTodo);
createEventListener(createTaskButton, "click", createTodo);
function createTodo(e) {
  let project;
  const createdDirectlyOnProject = findClick(e, ".create-task-directly");
  if (createdDirectlyOnProject) {
    const activeProject = findChosenProject();
    project = activeProject;
  } else {
    project = getInputForTaskProject();
  }

  let title = getInputForTaskTitle();
  let dueDate = getInputForTaskDueDate();
  let priority = getInputForTaskPriority();
  const task = new Todo(project, title, dueDate, priority);
  mainStorage = taskInterface.add(task);
  console.log(mainStorage);
  updateTodoDisplay();
}

// Display all todos in a project
createEventListener(inbox, "click", displayTasksInThisProject);
createEventListener(projectBlock, "click", displayTasksInThisProject);
function generateListOfTasks(project) {
  const currentProject = taskInterface.findAll(project);
  // Clear the todo block not to duplicate appended elements
  removePreviousTasksFromDOM();
  createBlocksToRepresentTasks(currentProject);
}

function displayTasksInThisProject(e) {
  // Click occurs on the inside of a button
  const btn = findClick(e, "button");
  if (!btn) return;

  const title = grabTitleOfActiveProject(e);
  highlightProject(title);
  generateListOfTasks(title);
}

function updateTodoDisplay() {
  const projectTitle = findChosenProject();
  generateListOfTasks(projectTitle);
}

// Remove a task
createEventListener(displayForTasks, "click", removeTask);
function removeTask(e) {
  const btn = findClick(e, "button");
  if (!btn) return;

  const task = findClosestDataAttibute(e);
  const id = getIdOfSpecificTask(task);

  task.remove();
  mainStorage = taskInterface.remove(id);
  console.log(mainStorage);
}

// Complete a task
function checkTaskStatus(e) {
  const task = e.target.checked;
  return task;
}

function selectAllParagraphs(e) {
  const parargraphs = e.target.parentNode.querySelectorAll("p");
  return parargraphs;
}

function applyStrikeThroughEffect(e) {
  const paragraphs = selectAllParagraphs(e);
  paragraphs.forEach((para) => (para.style.textDecoration = "line-through"));
}

function slowDownTaskRemoval(taskPara, idPara) {
  setTimeout(() => {
    taskPara.remove();
    mainStorage = taskInterface.remove(idPara);
    console.log(mainStorage);
  }, 300);
}

function preventUncheckingTask(e) {
  e.target.disabled = true;
}

createEventListener(displayForTasks, "change", completeTask);
function completeTask(e) {
  const taskStatus = checkTaskStatus(e);
  if (taskStatus) {
    applyStrikeThroughEffect(e);
    preventUncheckingTask(e);

    const task = findClosestDataAttibute(e);
    const id = getIdOfSpecificTask(task);
    slowDownTaskRemoval(task, id);
  }
}

// Create a project
function getInputForNewProject() {
  const title = prompt("Project name?", "");
  return title;
}

createEventListener(createProjectButton, "click", createProject);
function createProject() {
  const title = getInputForNewProject();
  const project = new Project(title);
  projectStorage = projectInterface.add(project);
  displayNewProject(title);
  highlightProject(title);
  updateTodoDisplay();
}

// Remove a project
function getSiblingElementText(element) {
  const title = element.previousElementSibling.textContent;
  return title;
}

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

function removeProjectBtn(element) {
  element.parentNode.remove();
}

createEventListener(projectBlock, "click", removeProject);
function removeProject(e) {
  const span = findClick(e, "span");
  if (!span) return;

  const project = getSiblingElementText(span);
  const answer = confirmChoice();
  if (answer) {
    changeArraysInMethodObjects(project);
    projectStorage = projectInterface.remove(project);
    removeProjectBtn(span);
    // While removing an element from DOM and needing to rerender content, it will automatically go back to inbox project
    removePreviousTasksFromDOM();
    highlightProject();
    updateTodoDisplay();
  }
}
