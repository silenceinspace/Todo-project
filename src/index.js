import { Todo, taskInterface } from "./todosManipulations";
import { Project, projectInterface } from "./projectManagement";
// Import methods
import * as DOMMethods from "./sectionWithDom";
// Import variables
import {
  okButton,
  projectBlock,
  displayNewProject,
  displayForTasks,
  createExpandedTextFields,
  createTodoForm,
} from "./generateHTML";

// Import styles
import "./styles/main.css";
import "./styles/todo-block.css";
import "./styles/popup-menu.css";

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

// Check input formats (if such a type of data is expected to be processed)
function checkInputGeneralRules(inputField) {
  if (inputField.length > 15) {
    alert("Too long title (maximum is 15 characters)");
    return true;
  }

  if (inputField.length !== 0 && inputField.length < 2) {
    alert("Too short title (minimum is 2 characters)");
    return true;
  }

  if (inputField === "") {
    alert("Empty title is not allowed");
    return true;
  }
}

function checkDateInput(inputField) {
  if (inputField === "") {
    alert("Please choose a due date");
    return true;
  }
}

function checkDescriptionInputLimit(inputField) {
  if (inputField.length > 100) {
    alert("Too long description (maximum is 100 characters");
    return true;
  }
}

function checkInputRulesForNewProject(inputField) {
  const isNotAllowed = checkInputGeneralRules(inputField);
  if (isNotAllowed) return true;

  const projectName = inputField.toLowerCase();
  if (projectName === "inbox") {
    alert("Cannot duplicate the name of the default project");
    return true;
  }

  if (projectName.includes(" ")) {
    alert("Title cannot contain blank spaces");
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
  const title = getTitleInput();
  const description = getDescriptionInput();
  const dueDate = getDueDateInput();
  const priority = getPriorityInput();
  const project = getProjectInput();

  const task = new Todo(project, title, description, dueDate, priority);
  mainStorage = taskInterface.add(task);
  console.log(mainStorage);
  // Open the inbox project when global todo creation is used with set "inbox" project, but another project is highlighted
  if (project === "inbox") {
    DOMMethods.highlightProject();
  }
  // Dynamically render newly created tasks
  DOMMethods.updateTodoDisplay();
}

function controlPopupView(e) {
  const btn = e.target.textContent;

  if (btn === "Cancel" || e.key === "Escape") {
    DOMMethods.closePopup();
  } else if (btn === "Add" || e.key === "Enter") {
    if (checkInputGeneralRules(getTitleInput())) return;
    if (checkDescriptionInputLimit(getDescriptionInput())) return;
    if (checkDateInput(getDueDateInput())) return;

    createTodo(e);
    DOMMethods.closePopup();
  }
}

// Remove a task
DOMMethods.createEventListener(displayForTasks, "click", removeTask);
function removeTask(e) {
  const removeTaskButton = DOMMethods.findClick(e, ".remove-task");
  if (!removeTaskButton) return;

  // Not allow removing tasks in today/upcoming categories
  const disableManipulation = DOMMethods.limitTasksOnDateCategories();
  if (disableManipulation) return;

  const task = DOMMethods.findClosestDataAttibute(e);
  const id = DOMMethods.getIdOfSpecificTask(task);

  task.remove();
  mainStorage = taskInterface.remove(id);
  console.log(mainStorage);
}

// Complete a task
DOMMethods.createEventListener(displayForTasks, "change", completeTask);
function slowDownTaskCompleting(blockWithTaskInfo, idParagraph) {
  setTimeout(() => {
    blockWithTaskInfo.remove();
    mainStorage = taskInterface.remove(idParagraph);
    console.log(mainStorage);
  }, 300);
}

function completeTask(e) {
  // Not allow completing tasks in today/upcoming categories
  const disableManipulation = DOMMethods.limitTasksOnDateCategories();
  if (disableManipulation) return;

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
  const title = document.querySelector("#for-new-project").value.toLowerCase();
  return title;
}

function createProject() {
  const title = getNewProjectTitle();
  const isNotAllowed = checkInputRulesForNewProject(title);
  if (isNotAllowed) return;

  const project = new Project(title);
  projectStorage = projectInterface.add(project);
  DOMMethods.toggleNewProjectInputBlock();
  displayNewProject(title);
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
function changeArraysInsideExternalInterfaces(projectName) {
  taskInterface.todos = projectInterface.removeAssociatedTasks(
    projectName,
    taskInterface.todos
  );
  mainStorage = taskInterface.todos;
}

function removeProject(e) {
  const span = DOMMethods.findClick(e, "span");
  if (!span) return;

  const project = DOMMethods.getSiblingElementText(span);
  const removalIsConfirmed = confirmChoice();
  if (removalIsConfirmed) {
    changeArraysInsideExternalInterfaces(project);
    projectStorage = projectInterface.remove(project);
    DOMMethods.removeProjectBtn(span);
    // While removing an element from DOM and needing to rerender content, it will automatically go back to inbox project
    DOMMethods.highlightProject();
    DOMMethods.updateTodoDisplay();
    console.log(projectStorage);
    console.log(mainStorage);
  }
}

// Expand todo's info
DOMMethods.createEventListener(displayForTasks, "click", expandTaskBlock);
function expandTaskBlock(e) {
  const expandTaskButton = DOMMethods.findClick(e, ".expand-task");
  if (!expandTaskButton) return;

  const hasExpandedClass = DOMMethods.findClick(e, ".expanded");
  if (hasExpandedClass) {
    DOMMethods.hideExpandedDetails(expandTaskButton);
    return;
  }

  const task = DOMMethods.findClosestDataAttibute(e);
  const id = DOMMethods.getIdOfSpecificTask(task);
  fetchExpandedBlock(expandTaskButton, id, task);
}

function fetchExpandedBlock(buttonBlock, idBlock, taskBlock) {
  for (let i = 0; i < mainStorage.length; i++) {
    if (mainStorage[i].id === idBlock) {
      const expandedBlock = mainStorage[i];
      const descriptionPara = expandedBlock.todoDescription;
      const priorityPara = expandedBlock.todoPriority;
      const projectPara = expandedBlock.todoProject;
      createExpandedTextFields(
        taskBlock,
        descriptionPara,
        priorityPara,
        projectPara
      );
      buttonBlock.classList.add("expanded");
    }
  }
}
